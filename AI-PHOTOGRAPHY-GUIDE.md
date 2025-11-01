# AI Photography Generator - Usage Guide

**Automated image generation using Google's Gemini AI**

---

## Quick Start

### 1. Set Up Your API Key

Edit the `.env` file and add your Gemini API key:

```bash
GEMINI_API_KEY=your-actual-api-key-here
```

Get your API key from: https://makersuite.google.com/app/apikey

### 2. Generate Images

Three easy ways to use the generator:

#### **Option A: Use a Template** (Fastest)

```bash
npm run generate-image:support
```

Available templates:
- `generate-image:hero` - Website hero/banner images
- `generate-image:support` - Supportive community images
- `generate-image:product` - Product photography
- `generate-image:testimonial` - Portrait/headshot photography

#### **Option B: Interactive Mode** (Most Flexible)

```bash
npm run generate-image:interactive
```

Answer a few questions and we'll build the perfect prompt for you.

#### **Option C: Custom Prompt** (Most Control)

```bash
npm run generate-image "Your custom prompt here"
```

---

## How It Works

### Current Workflow (Semi-Automated)

1. **Run the script** with your chosen method
2. **Optimized prompt is generated** using photography best practices
3. **Prompt is saved** to `generated-images/latest-prompt.txt`
4. **Instructions appear** showing you where to paste the prompt
5. **Go to Google AI Studio** and paste the prompt
6. **Download your image** to the `generated-images/` folder

### Why Semi-Automated?

Google's Imagen API (for image generation) currently requires using Google AI Studio or Vertex AI. Full automation requires additional setup with Vertex AI, which has more complex authentication.

This workflow gives you:
- ✅ **Optimized prompts** based on photography best practices
- ✅ **Consistent quality** across all images
- ✅ **Easy process** without complex API setup
- ✅ **Platform-specific optimization** for Gemini

---

## Templates Explained

### Hero Template

Perfect for:
- Website banner/hero images
- Large format images with text overlay
- Lifestyle shots showing aspirational moments

**Example output:**
- Diverse woman engaged in wellness activity
- Golden hour lighting, warm atmosphere
- Negative space for text overlay
- Professional, authentic feel

### Support Template

Perfect for:
- "You're not alone" sections
- Community/connection imagery
- Emotional validation content

**Example output:**
- Two diverse women in supportive conversation
- Natural home setting
- Genuine emotional connection
- Warm, peaceful atmosphere

### Product Template

Perfect for:
- Product in use shots
- How-it-works sections
- Real-world context imagery

**Example output:**
- Wellness patch being worn naturally
- Clear product focus
- Authentic daily life setting
- Professional product photography quality

### Testimonial Template

Perfect for:
- About page portraits
- Team member photos
- Customer testimonial headshots

**Example output:**
- Environmental portrait
- Natural, approachable expression
- Professional but warm
- Softly blurred background

---

## Advanced Usage

### Custom Prompts

Build your own prompts using this structure:

```
A professional [STYLE] photograph for [USE CASE].
Subject: [DESCRIBE WHAT TO PHOTOGRAPH]
The scene has [LIGHTING TYPE] creating a [MOOD] atmosphere.
The composition is [ORIENTATION] format.
[SPECIFIC REQUIREMENTS]
This is high-quality commercial photography.
High resolution, magazine quality.
```

**Example:**

```bash
npm run generate-image "A professional warm photograph for a wellness website. Subject: Woman journaling in morning sunlight with coffee. The scene has natural golden hour lighting creating a peaceful atmosphere. The composition is landscape format with space on the right for text overlay. This is high-quality commercial photography. High resolution, magazine quality."
```

### Photography Best Practices Included

Every generated prompt includes:

✅ **Lighting guidance** - Natural light, golden hour, studio lighting
✅ **Composition rules** - Rule of thirds, negative space, depth of field
✅ **Mood/tone** - Warm, authentic, professional, calm, empowering
✅ **Technical specs** - High resolution, magazine quality
✅ **Brand alignment** - Matches your wellness/health brand
✅ **Diversity** - Inclusive representation when people are included

---

## File Structure

```
Josie Patch B2C site/
├── .env                          # Your API key (never commit!)
├── generate-image.js             # Main automation script
├── AI-PHOTOGRAPHY-GUIDE.md       # This file
├── generated-images/             # Output folder
│   └── latest-prompt.txt         # Most recent prompt
└── ~/.config/claude-code/skills/
    └── ai-photography-prompter.md  # Full skill documentation
```

---

## Troubleshooting

### Error: "GEMINI_API_KEY not set"

**Solution:** Edit `.env` and replace `your-api-key-here` with your actual API key from https://makersuite.google.com/app/apikey

### Generated image doesn't match expectations

**Solutions:**
1. **Run the script again** - Try the same prompt multiple times
2. **Adjust the prompt** - Add more specific details
3. **Check the skill documentation** - See `~/.config/claude-code/skills/ai-photography-prompter.md` for tips
4. **Use interactive mode** - Answer detailed questions for better results

### Want different composition/mood

**Modify these parts of the prompt:**

- **Lighting:** "golden hour" → "soft window light" → "dramatic studio lighting"
- **Mood:** "warm" → "professional" → "calm" → "energetic"
- **Composition:** "landscape" → "portrait" → "square"
- **Background:** "blurred background" → "natural setting" → "minimalist"

---

## Tips for Best Results

### 1. Be Specific About People

❌ "A woman"
✅ "A diverse woman in her mid-30s"

❌ "Two people talking"
✅ "Two women of different ethnicities having a supportive conversation"

### 2. Describe the Setting in Detail

❌ "In a room"
✅ "In a bright, naturally lit living room with large windows and plants"

### 3. Specify the Mood/Emotion

❌ "Happy"
✅ "Genuine expressions of empathy and understanding, showing real emotional connection"

### 4. Include Technical Photography Terms

Good prompts include:
- "Natural golden hour lighting"
- "Shallow depth of field"
- "Rule of thirds composition"
- "Soft focus background"
- "High resolution editorial photography"

### 5. Consider Your Use Case

For **text overlay:** Include "negative space on the [left/right] for text overlay"

For **social media:** Specify "optimized for mobile viewing"

For **print:** Emphasize "high resolution, 8k quality"

---

## Next Steps

### After Generating Your Image

1. **Review quality** - Does it match your brand?
2. **Optimize for web** - Compress to < 500KB if needed
3. **Add to your project** - Move to `hormone-harmony/public/photos/`
4. **Update alt text** - Use descriptive, accessible alt text
5. **Test responsive** - Check how it looks on mobile/tablet/desktop

### Integration with Your Website

Once you have your generated image:

```jsx
// In your React component
<img
  src="/photos/generated-support-image.png"
  alt="Two diverse women having a supportive conversation on a couch"
  className="rounded-lg shadow-md w-full"
  loading="lazy"
/>
```

---

## Full Skill Documentation

For the complete photography prompt engineering guide, including:
- Platform-specific optimization (DALL-E, Midjourney, Stable Diffusion)
- Photography terminology library
- Diversity & representation guidelines
- Troubleshooting guide
- 60+ pages of best practices

See: `~/.config/claude-code/skills/ai-photography-prompter.md`

---

## Examples from Your Project

### Example 1: Validation Section Image (Already Generated!)

**Prompt used:**
```
A professional lifestyle photograph capturing two women of different ethnicities
sitting together on a comfortable couch in a bright, naturally lit living room...
```

**Result:** The beautiful image you just generated showing supportive friendship!

**Use case:** Perfect for your "You're Not Alone" section

---

### Example 2: Yoga/Wellness Image

**Generate with:**
```bash
npm run generate-image "Professional lifestyle photography of a diverse woman in her 30s practicing morning yoga on a sunlit studio floor. Natural golden hour lighting streaming through large windows creates a warm, peaceful atmosphere. Shot from a low angle with shallow depth of field. The composition uses negative space on the right for text overlay. Authentic wellness photography style, calm and empowering mood. High resolution, magazine quality."
```

**Use case:** Validation section alternative or wellness content

---

### Example 3: Product Close-Up

**Generate with:**
```bash
npm run generate-image:product
```

**Use case:** "How It Works" section showing the patch in detail

---

## Support & Feedback

**Found a bug?** Check the script at `generate-image.js`

**Want to customize templates?** Edit the `templates` object in `generate-image.js`

**Need more photography advice?** Read the full skill documentation

**Want full API automation?** Let me know - we can set up Vertex AI integration!

---

## Changelog

**v1.0** - November 1, 2025
- ✅ Initial release
- ✅ Template system (hero, support, product, testimonial)
- ✅ Interactive mode
- ✅ Custom prompt support
- ✅ Integration with AI Photography Prompter skill
- ✅ Gemini/Imagen optimization

---

**Happy generating! 📸**

For questions, check the main skill documentation or ask Claude!
