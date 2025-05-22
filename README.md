# Mottai UI

A modern React component library with beautiful UI components.

## Installation

```bash
npm install mottai-ui
```

## Usage

1. Import and use components:

```jsx
import { Card } from 'mottai-ui';
import 'mottai-ui/styles'; // Import styles

function App() {
  return (
    <Card 
      title="My Card" 
      description="This is a beautiful card component" 
    />
  );
}
```

### Important: Styles

Make sure to import the styles in your application:

```jsx
// In your main App file or entry point
import 'mottai-ui/styles';
```

## Available Components

### Card

A beautiful card component for displaying content.

```jsx
<Card 
  title="Card Title" 
  description="Card description goes here" 
/>
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Run Storybook:
```bash
npm run storybook
```

3. Build the library:
```bash
npm run build
```

## License

MIT
