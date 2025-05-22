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
import 'mottai-ui/styles.css'; // Import styles

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
import 'mottai-ui/styles.css';
```

## Available Components

### Card

A beautiful card component for displaying content.

```jsx
<Card 
  title="Card Title" 
  description="Card description goes here" 
  // Optional: Add custom classes to the container
  className="my-custom-class"
  // Optional: Customize specific parts
  customStyles={{
    container: "my-container-class",
    title: "my-title-class",
    description: "my-description-class"
  }}
/>
```

#### Customization

The Card component can be customized in two ways:

1. Using the `className` prop to add classes to the card container
2. Using the `customStyles` prop to customize specific parts of the card:
   - `container`: Styles for the card container
   - `title`: Styles for the card title
   - `description`: Styles for the card description

Example with Tailwind classes:

```jsx
<Card 
  title="Custom Card" 
  description="With custom styles" 
  customStyles={{
    container: "bg-blue-100 hover:bg-blue-200",
    title: "text-blue-800 text-2xl",
    description: "text-blue-600"
  }}
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
