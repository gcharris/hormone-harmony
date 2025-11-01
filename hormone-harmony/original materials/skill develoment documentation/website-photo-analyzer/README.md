# Website Photo Analyzer - Installation & Usage Guide

## Quick Installation for Claude Code

### Step 1: Install the Skill Globally
```bash
# Make the skill available across all repos
mkdir -p ~/.claude/skills/website-photo-analyzer/scripts

# Copy the skill files (adjust paths as needed)
cp SKILL.md ~/.claude/skills/website-photo-analyzer/
cp scripts/photo_processor.py ~/.claude/skills/website-photo-analyzer/scripts/

# Install required Python dependencies
pip install Pillow
```

### Step 2: Make the Script Executable
```bash
chmod +x ~/.claude/skills/website-photo-analyzer/scripts/photo_processor.py
```

### Step 3: Test Installation
```bash
# Navigate to any repo with photos
cd /path/to/your/repo

# Test Claude Code recognition
claude-code "List all available skills"
# You should see "website-photo-analyzer" in the list
```

## Usage Examples for Your Use Case

### Basic Photo Analysis (Your Current Need)
```bash
# Navigate to your repo with the dozen photos
cd /path/to/your/repo

# Analyze all photos in your photos folder
claude-code "Using the website-photo-analyzer skill, analyze all photos in ./photos/ directory. I have a dozen existing photographs from a sister website that I want to evaluate for my new hormone health website. Please:

1. Process the images efficiently to save tokens
2. Evaluate each photo for professional quality and website suitability  
3. Assess brand alignment for a warm, trustworthy health/wellness brand
4. Rank the top 5 photos with specific usage recommendations
5. Identify which photos work best for hero sections, content support, and backgrounds

Brand context: Hormone health and wellness, targeting women 25-45, warm and approachable but professional tone."
```

### Quick Selection (Fast Results)
```bash
claude-code "Using the website-photo-analyzer skill, give me a quick assessment of photos in ./photos/ directory. Just show me the top 3 photos with brief reasons why they're best for a health/wellness website."
```

### Detailed Analysis (Comprehensive Report)
```bash
claude-code "Using the website-photo-analyzer skill, provide detailed analysis of photos in ./photos/ including:
- Technical quality scores
- Website suitability assessment  
- Specific usage recommendations (hero, about page, blog features)
- File optimization suggestions
- Brand alignment evaluation for hormone health/wellness industry"
```

## Token-Efficient Processing

The skill automatically:
- **Resizes images** to 800px max dimension
- **Compresses** to 85% quality
- **Saves 80-95% tokens** compared to analyzing full-resolution images
- **Preserves** original files unchanged

### Manual Processing (Optional)
If you want to pre-process images yourself:
```bash
# Navigate to your photo directory
cd /path/to/photos

# Run the processing script
python ~/.claude/skills/website-photo-analyzer/scripts/photo_processor.py ./
```

## Expected Output

You'll get a comprehensive report like:
```
# Website Photo Analysis Report

## Executive Summary
- Total photos analyzed: 12
- Recommended for use: 8 (67%)
- Top recommendations: lifestyle-woman-1.jpg, product-shot-clean.jpg, team-office-natural.jpg
- Processing efficiency: 89% token savings

## Individual Photo Analysis

### lifestyle-woman-1.jpg - Score: 9.2/10 - Primary Use
**Quick Assessment**: Excellent hero image candidate with professional quality and strong brand alignment

**Strengths**:
- Natural lighting creates warm, approachable mood
- Subject appears confident and healthy (ideal for hormone health)
- Clean background allows for text overlay
- High technical quality with sharp focus

**Best Use Cases**:
- Homepage hero section
- About page header
- Landing page primary image

### [Additional photos analyzed...]

## Ranked Recommendations

### Tier 1: Primary Use (Hero/Feature Images)
1. lifestyle-woman-1.jpg (9.2) - Perfect hero image, natural lighting
2. product-shot-clean.jpg (8.8) - Clean product photography, versatile use

### Tier 2: Supporting Content  
1. team-office-natural.jpg (7.4) - Good for about page, professional feel
2. consultation-room.jpg (7.1) - Supports service descriptions

## Action Items
- [x] Prioritize lifestyle-woman-1.jpg for homepage hero
- [ ] Consider cropping product-shot-clean.jpg for better mobile display
- [ ] Source additional diversity in lifestyle shots
```

## Troubleshooting

### Common Issues

**Skill not recognized:**
```bash
# Verify installation
ls -la ~/.claude/skills/website-photo-analyzer/
# Should show SKILL.md and scripts/ directory
```

**Python dependencies missing:**
```bash
# Install required packages
pip install Pillow
```

**Photos not found:**
```bash
# Check photo directory path
ls -la ./photos/
# Verify image file formats (.jpg, .png, .webp supported)
```

**Large file sizes:**
```bash
# The skill automatically processes images efficiently
# If still having token issues, try fewer images at once:
claude-code "Using the website-photo-analyzer skill, analyze only the first 5 photos in ./photos/ directory"
```

## Advanced Usage

### Compare Against Competitor Photos
```bash
claude-code "Using the website-photo-analyzer skill, analyze our photos in ./photos/ and compare the style/quality against best practices for health/wellness websites. What improvements should we make?"
```

### Context-Specific Analysis
```bash
# For specific website sections
claude-code "Using the website-photo-analyzer skill, identify which photos work best for:
1. Homepage hero (needs text overlay space)  
2. About page team section (professional, approachable)
3. Blog post featured images (engaging, health-focused)
4. Service page backgrounds (subtle, supportive)"
```

### Brand Development
```bash
claude-code "Using the website-photo-analyzer skill, evaluate how our photo selections support our brand evolution from clinical to warm/approachable in the hormone health space."
```

## Integration with Other Skills

### With Brand Guidelines
```bash
claude-code "Using both website-photo-analyzer and brand-guidelines skills, ensure photo selections align with our visual identity and color palette standards."
```

### With Content Strategy  
```bash
claude-code "Using website-photo-analyzer and content-creator skills, select photos and suggest how to integrate them with our content strategy for maximum user engagement."
```

## File Management

### Organizing Results
The analysis creates:
- **photo_analysis_prep.json** - Processed image data
- **Detailed recommendations** - In Claude's response
- **Action items** - Next steps for implementation

### Backup Original Photos
```bash
# Always backup before making changes
cp -r photos/ photos_backup/
```

## Next Steps After Analysis

1. **Implement top recommendations** - Use Tier 1 photos for key sections
2. **Optimize file sizes** - Compress selected photos for web use  
3. **Plan additional photography** - Fill gaps identified in analysis
4. **Test with users** - A/B test top photo selections
5. **Monitor performance** - Track engagement with selected images

## Support

For issues with:
- **Skill functionality** - Check installation steps above
- **Image processing** - Verify Python/Pillow installation
- **Claude Code integration** - Ensure skill is in `~/.claude/skills/`
- **Analysis quality** - Provide more specific brand context in prompts

Ready to analyze your photos! 📸✨
