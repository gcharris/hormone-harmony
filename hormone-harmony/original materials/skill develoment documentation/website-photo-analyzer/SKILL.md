---
name: website-photo-analyzer
description: Analyze and select the best photographs for website use. Processes images efficiently, evaluates composition/quality/brand fit, and provides ranked recommendations.
---

# Website Photo Analyzer Skill

## Purpose

Efficiently analyze multiple photographs to determine their suitability for website use. This skill processes images to save tokens, evaluates them against website criteria, and provides ranked recommendations with specific reasons.

## When to Use This Skill

- Selecting photos from an existing collection for website use
- Evaluating photo quality and composition for web suitability
- Comparing multiple images to choose the best options
- Analyzing photos for brand consistency and professional appearance

## Core Analysis Framework

### Image Processing Pipeline
1. **Efficient Loading** - Process images to optimal size for analysis
2. **Quality Assessment** - Technical quality, composition, lighting
3. **Website Suitability** - Professional appearance, brand alignment
4. **Comparative Ranking** - Relative scoring and recommendations

### Analysis Criteria

#### Technical Quality (25%)
- **Image clarity and sharpness**
- **Lighting quality** (natural vs artificial, exposure)
- **Composition strength** (rule of thirds, focal points, balance)
- **Color quality** (saturation, white balance, color harmony)
- **Resolution suitability** for web use

#### Website Suitability (35%)
- **Professional appearance** - Polished, high-quality look
- **Subject matter appropriateness** - Fits website purpose
- **Background quality** - Clean, undistracting backgrounds
- **Text overlay potential** - Space for headlines/copy
- **Crop flexibility** - Works in multiple aspect ratios

#### Brand Alignment (25%)
- **Color palette match** - Complements brand colors
- **Mood and tone** - Matches brand personality
- **Target audience appeal** - Resonates with intended users
- **Style consistency** - Fits with brand aesthetic
- **Message alignment** - Supports brand values

#### Practical Considerations (15%)
- **File size efficiency** - Optimizable for web
- **Versatility** - Usable across multiple pages/contexts
- **Uniqueness** - Distinctive, not generic stock feel
- **Legal/rights clarity** - Clear usage rights

## Analysis Process

### Step 1: Image Processing Setup
```python
# Image processing for token efficiency
import os
from PIL import Image
import base64
from io import BytesIO

def process_image_for_analysis(image_path, max_dimension=800):
    """Process image to optimal size for Claude analysis"""
    with Image.open(image_path) as img:
        # Convert to RGB if necessary
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Resize maintaining aspect ratio
        img.thumbnail((max_dimension, max_dimension), Image.Resampling.LANCZOS)
        
        # Compress for analysis
        buffer = BytesIO()
        img.save(buffer, format='JPEG', quality=85, optimize=True)
        
        return {
            'filename': os.path.basename(image_path),
            'original_size': os.path.getsize(image_path),
            'processed_size': len(buffer.getvalue()),
            'dimensions': img.size,
            'data': base64.b64encode(buffer.getvalue()).decode()
        }

def batch_process_photos(photo_directory):
    """Process all photos in directory for analysis"""
    supported_formats = ('.jpg', '.jpeg', '.png', '.webp', '.bmp')
    processed_images = []
    
    for filename in os.listdir(photo_directory):
        if filename.lower().endswith(supported_formats):
            image_path = os.path.join(photo_directory, filename)
            processed_images.append(process_image_for_analysis(image_path))
    
    return processed_images
```

### Step 2: Analysis Framework

For each image, evaluate:

#### Composition Analysis
- **Rule of thirds compliance** - Subjects positioned on power points
- **Leading lines** - Visual flow guides the eye effectively
- **Depth and dimension** - Foreground/background separation
- **Visual balance** - Harmonious element distribution
- **Focal point clarity** - Clear subject emphasis

#### Technical Assessment
- **Sharpness quality** - In focus where needed
- **Exposure correctness** - Proper brightness levels
- **Color accuracy** - Natural, appealing colors
- **Noise levels** - Minimal grain or digital artifacts
- **Dynamic range** - Detail in shadows and highlights

#### Website Context Evaluation
- **Hero image potential** - Works as large, prominent display
- **Content support** - Enhances rather than distracts from text
- **Mobile compatibility** - Readable at small sizes
- **Loading efficiency** - File size appropriate for web
- **Accessibility** - High contrast, clear subjects

### Step 3: Scoring and Recommendations

#### Scoring Matrix (0-10 scale)
```
Overall Score = (Technical × 0.25) + (Suitability × 0.35) + (Brand × 0.25) + (Practical × 0.15)

9-10: Excellent - Perfect for primary use (hero images, key sections)
7-8:  Good - Suitable for secondary use (supporting content)
5-6:  Fair - Usable with editing or specific contexts
3-4:  Poor - Significant issues, avoid unless necessary
1-2:  Unusable - Do not use for website
```

#### Recommendation Categories
- **Primary Selections** (Score 8+) - Best overall options
- **Secondary Options** (Score 6-7.9) - Good supporting images
- **Conditional Use** (Score 4-5.9) - Usable with modifications
- **Avoid** (Score <4) - Not suitable for website use

## Output Format

### Analysis Report Structure
```markdown
# Website Photo Analysis Report

## Executive Summary
- **Total photos analyzed**: [Number]
- **Recommended for use**: [Number] ([Percentage]%)
- **Top recommendations**: [Top 3-5 photos]
- **Processing efficiency**: [Token savings from compression]

## Individual Photo Analysis

### [Photo Name] - Score: [X.X]/10 - [Category]

**Quick Assessment**: [One-line summary]

**Strengths**:
- [Specific positive attributes]
- [Technical/composition highlights]
- [Brand alignment factors]

**Considerations**:
- [Potential improvements needed]
- [Usage recommendations]
- [Cropping/editing suggestions]

**Best Use Cases**:
- [Specific website sections/purposes]
- [Recommended placement/sizing]

---

## Ranked Recommendations

### Tier 1: Primary Use (Hero/Feature Images)
1. **[Photo Name]** (Score: X.X) - [Reason for top ranking]
2. **[Photo Name]** (Score: X.X) - [Specific strengths]

### Tier 2: Supporting Content
1. **[Photo Name]** (Score: X.X) - [Usage suggestions]
2. **[Photo Name]** (Score: X.X) - [Context recommendations]

### Tier 3: Conditional/Edited Use
- **[Photo Name]** - [Required modifications]
- **[Photo Name]** - [Specific use cases]

## Action Items
- [ ] Prioritize processing of Tier 1 images
- [ ] Consider photo editing for [specific images]
- [ ] Source additional photos for [gaps identified]
- [ ] Optimize file sizes for [specific images]
```

## Usage Instructions

### Quick Analysis Command
```bash
# Navigate to your repo with photos
cd /path/to/your/repo

# Analyze all photos in the photos directory
claude-code "Using the website-photo-analyzer skill, analyze all photos in the ./photos/ directory and provide ranked recommendations for website use. Focus on [your specific context: hormone health/wellness/etc.] and [your brand qualities: warm/professional/authentic/etc.]"
```

### Detailed Analysis Command
```bash
claude-code "Using the website-photo-analyzer skill, perform comprehensive analysis of photos in ./photos/ directory. Provide:
1. Technical quality assessment for each image
2. Website suitability scoring
3. Brand alignment evaluation for [your brand/industry]
4. Specific usage recommendations (hero, content, backgrounds)
5. File optimization suggestions
6. Top 5 ranked selections with reasoning"
```

### Custom Context Analysis
```bash
# For specific use cases
claude-code "Using the website-photo-analyzer skill, analyze photos for:
- Homepage hero section (needs text overlay space)
- About page team photos (professional, warm)
- Product/service showcase (clean, focused)
- Blog post featured images (engaging, relevant)

Brand context: [Your brand description]
Target audience: [Your audience description]"
```

## File Processing Optimization

### Before Analysis (Automatic)
- **Resize images** to 800px max dimension for analysis
- **Compress** to ~85% quality for token efficiency
- **Convert** to consistent format (JPEG)
- **Maintain** original files unchanged

### Token Savings
- **Original batch**: ~50-100 images × 1-5MB each = massive token usage
- **Processed batch**: ~50-100 images × 50-200KB each = efficient analysis
- **Estimated savings**: 80-95% token reduction

### Output Efficiency
- **Quick scan mode**: Overview of all images (2-3 sentences each)
- **Detailed analysis**: Full evaluation of top candidates
- **Comparison mode**: Side-by-side evaluation of similar options

## Integration with Other Skills

### Combine with Brand Guidelines
```bash
"Using both the brand-guidelines and website-photo-analyzer skills, analyze photos ensuring they align with our visual identity standards and color palette"
```

### Combine with Content Strategy
```bash
"Using website-photo-analyzer and content-creator skills, select photos and suggest how to integrate them with our content strategy for maximum impact"
```

## Quality Assurance Checklist

### Pre-Analysis Setup ✓
- [ ] All photos in designated directory
- [ ] File formats supported (.jpg, .png, .webp)
- [ ] Directory path specified correctly
- [ ] Brand context provided to Claude

### Analysis Completeness ✓
- [ ] Each photo individually evaluated
- [ ] Scoring criteria consistently applied
- [ ] Specific usage recommendations provided
- [ ] Comparative ranking completed
- [ ] Action items clearly listed

### Output Validation ✓
- [ ] Recommendations align with brand goals
- [ ] Technical assessments accurate
- [ ] Usage suggestions practical
- [ ] File optimization needs identified
- [ ] Selection rationale clear and actionable

## Advanced Features

### Batch Comparison Analysis
Compare multiple photo sets or evaluate against competitor images for benchmarking.

### Context-Specific Evaluation
Adjust criteria based on specific website sections (hero vs content vs backgrounds).

### Brand Evolution Tracking
Evaluate how photo selections support brand development over time.

### A/B Testing Recommendations
Suggest photo variations for testing different approaches.

## Version History

**v1.0.0** - Initial release with core analysis framework
- Basic photo evaluation and ranking
- Token-efficient image processing
- Website suitability assessment
- Brand alignment evaluation

*Last Updated: November 2025*
