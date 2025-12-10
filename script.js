const defaultConfig = {
  background_color: '#ececec',
  surface_color: '#ffffff',
  text_color: '#400128',
  primary_action_color: '#efd91d',
  secondary_action_color: '#c1979d',
  font_family: 'Inter',
  font_size: 16,
  brand_name: 'The Beauty Reaction',
  tagline: 'Every brand has a reaction. I engineer yours.',
  hero_subtitle: 'Transforming cosmetic brands through strategic storytelling, refined branding, and data-driven SEO that creates lasting impressions.',
  cta_button: 'Discover Our Process',
  about_heading: 'The Science of Beauty Marketing',
  about_text: 'At The Beauty Reaction, we understand that every cosmetic brand has a unique chemistry...'
};

async function onConfigChange(config) {
  const bgColor = config.background_color || defaultConfig.background_color;
  const surfaceColor = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
  const secondaryColor = config.secondary_action_color || defaultConfig.secondary_action_color;
  const fontFamily = config.font_family || defaultConfig.font_family;
  const baseFontSize = config.font_size || defaultConfig.font_size;

  document.body.style.background = bgColor;
  document.body.style.color = textColor;

  document.querySelector('.tagline').style.color = secondaryColor;

  const ctaButton = document.querySelector('.cta-button');
  ctaButton.style.background = textColor;
  ctaButton.style.borderColor = textColor;
  ctaButton.style.color = bgColor;

  document.querySelector('.blog-category').style.color = primaryColor;
  document.querySelector('.footer-accent').style.color = primaryColor;

  document.body.style.fontFamily = `${fontFamily}, Arial, sans-serif`;
  document.body.style.fontSize = `${baseFontSize}px`;

  document.getElementById('nav-brand').textContent = config.brand_name || defaultConfig.brand_name;
  document.getElementById('brand-name').textContent = config.brand_name || defaultConfig.brand_name;
  document.getElementById('tagline-text').textContent = config.tagline || defaultConfig.tagline;
  document.getElementById('hero-subtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
  document.getElementById('cta-text').textContent = config.cta_button || defaultConfig.cta_button;
  document.getElementById('about-title').textContent = config.about_heading || defaultConfig.about_heading;
  document.getElementById('about-description').textContent = config.about_text || defaultConfig.about_text;
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          window.elementSdk.setConfig({ background_color: value });
        }
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => {
          config.surface_color = value;
          window.elementSdk.setConfig({ surface_color: value });
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          window.elementSdk.setConfig({ text_color: value });
        }
      },
      {
        get: () => config.primary_action_color || defaultConfig.primary_action_color,
        set: (value) => {
          config.primary_action_color = value;
          window.elementSdk.setConfig({ primary_action_color: value });
        }
      },
      {
        get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
        set: (value) => {
          config.secondary_action_color = value;
          window.elementSdk.setConfig({ secondary_action_color: value });
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => {
        config.font_family = value;
        window.elementSdk.setConfig({ font_family: value });
      }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => {
        config.font_size = value;
        window.elementSdk.setConfig({ font_size: value });
      }
    }
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ['brand_name', config.brand_name || defaultConfig.brand_name],
    ['tagline', config.tagline || defaultConfig.tagline],
    ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
    ['cta_button', config.cta_button || defaultConfig.cta_button],
    ['about_heading', config.about_heading || defaultConfig.about_heading],
    ['about_text', config.about_text || defaultConfig.about_text]
  ]);
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}
