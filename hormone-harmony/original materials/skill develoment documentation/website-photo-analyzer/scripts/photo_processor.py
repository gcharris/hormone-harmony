#!/usr/bin/env python3
"""
Website Photo Analyzer - Image Processing Script
Efficiently processes photos for Claude analysis while preserving quality
"""

import os
import sys
from PIL import Image
import base64
from io import BytesIO
import json
from pathlib import Path

def process_image_for_analysis(image_path, max_dimension=800, quality=85):
    """
    Process image to optimal size for Claude analysis
    
    Args:
        image_path: Path to the image file
        max_dimension: Maximum width or height in pixels
        quality: JPEG quality (1-100)
    
    Returns:
        Dict with processed image data and metadata
    """
    try:
        with Image.open(image_path) as img:
            original_size = os.path.getsize(image_path)
            original_dimensions = img.size
            
            # Convert to RGB if necessary
            if img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Resize maintaining aspect ratio
            img.thumbnail((max_dimension, max_dimension), Image.Resampling.LANCZOS)
            
            # Compress for analysis
            buffer = BytesIO()
            img.save(buffer, format='JPEG', quality=quality, optimize=True)
            
            processed_data = buffer.getvalue()
            
            return {
                'filename': os.path.basename(image_path),
                'original_path': str(image_path),
                'original_size_bytes': original_size,
                'original_size_mb': round(original_size / (1024 * 1024), 2),
                'processed_size_bytes': len(processed_data),
                'processed_size_mb': round(len(processed_data) / (1024 * 1024), 2),
                'original_dimensions': original_dimensions,
                'processed_dimensions': img.size,
                'compression_ratio': round((1 - len(processed_data) / original_size) * 100, 1),
                'data': base64.b64encode(processed_data).decode(),
                'status': 'success'
            }
    except Exception as e:
        return {
            'filename': os.path.basename(image_path),
            'original_path': str(image_path),
            'status': 'error',
            'error': str(e)
        }

def batch_process_photos(photo_directory, max_dimension=800, quality=85):
    """
    Process all photos in directory for analysis
    
    Args:
        photo_directory: Path to directory containing photos
        max_dimension: Maximum dimension for processed images
        quality: JPEG quality for compression
    
    Returns:
        Dict with processed images and summary statistics
    """
    supported_formats = ('.jpg', '.jpeg', '.png', '.webp', '.bmp', '.tiff')
    processed_images = []
    errors = []
    
    # Validate directory
    if not os.path.isdir(photo_directory):
        return {
            'error': f"Directory not found: {photo_directory}",
            'processed_images': [],
            'summary': {}
        }
    
    # Find all image files
    image_files = []
    for filename in os.listdir(photo_directory):
        if filename.lower().endswith(supported_formats):
            image_files.append(os.path.join(photo_directory, filename))
    
    if not image_files:
        return {
            'error': f"No supported image files found in {photo_directory}",
            'supported_formats': supported_formats,
            'processed_images': [],
            'summary': {}
        }
    
    # Process each image
    total_original_size = 0
    total_processed_size = 0
    
    for image_path in sorted(image_files):
        result = process_image_for_analysis(image_path, max_dimension, quality)
        
        if result['status'] == 'success':
            processed_images.append(result)
            total_original_size += result['original_size_bytes']
            total_processed_size += result['processed_size_bytes']
        else:
            errors.append(result)
    
    # Calculate summary statistics
    summary = {
        'total_images_found': len(image_files),
        'successfully_processed': len(processed_images),
        'errors': len(errors),
        'total_original_size_mb': round(total_original_size / (1024 * 1024), 2),
        'total_processed_size_mb': round(total_processed_size / (1024 * 1024), 2),
        'total_compression_ratio': round((1 - total_processed_size / total_original_size) * 100, 1) if total_original_size > 0 else 0,
        'token_savings_estimate': f"{round((1 - total_processed_size / total_original_size) * 100, 1)}%" if total_original_size > 0 else "0%"
    }
    
    return {
        'processed_images': processed_images,
        'errors': errors,
        'summary': summary,
        'processing_settings': {
            'max_dimension': max_dimension,
            'quality': quality
        }
    }

def save_analysis_prep(output_data, output_file='photo_analysis_prep.json'):
    """Save processed data to JSON file for Claude analysis"""
    with open(output_file, 'w') as f:
        json.dump(output_data, f, indent=2)
    print(f"Analysis preparation saved to: {output_file}")

def main():
    """Main function for command-line usage"""
    if len(sys.argv) < 2:
        print("Usage: python photo_processor.py <photo_directory> [max_dimension] [quality]")
        print("Example: python photo_processor.py ./photos/ 800 85")
        sys.exit(1)
    
    photo_directory = sys.argv[1]
    max_dimension = int(sys.argv[2]) if len(sys.argv) > 2 else 800
    quality = int(sys.argv[3]) if len(sys.argv) > 3 else 85
    
    print(f"Processing photos in: {photo_directory}")
    print(f"Max dimension: {max_dimension}px")
    print(f"Quality: {quality}%")
    print("-" * 50)
    
    # Process photos
    result = batch_process_photos(photo_directory, max_dimension, quality)
    
    if 'error' in result:
        print(f"Error: {result['error']}")
        sys.exit(1)
    
    # Print summary
    summary = result['summary']
    print(f"✅ Processing Complete!")
    print(f"📁 Images found: {summary['total_images_found']}")
    print(f"✅ Successfully processed: {summary['successfully_processed']}")
    print(f"❌ Errors: {summary['errors']}")
    print(f"💾 Original total size: {summary['total_original_size_mb']} MB")
    print(f"📦 Processed total size: {summary['total_processed_size_mb']} MB")
    print(f"🎯 Compression ratio: {summary['total_compression_ratio']}%")
    print(f"💡 Estimated token savings: {summary['token_savings_estimate']}")
    
    if result['errors']:
        print("\n❌ Errors encountered:")
        for error in result['errors']:
            print(f"  - {error['filename']}: {error['error']}")
    
    # Save for Claude analysis
    output_file = 'photo_analysis_prep.json'
    save_analysis_prep(result, output_file)
    print(f"\n📋 Data prepared for Claude analysis: {output_file}")
    print("\nNext step: Use this data with Claude Code and the website-photo-analyzer skill!")

if __name__ == "__main__":
    main()
