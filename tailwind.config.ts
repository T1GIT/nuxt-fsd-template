import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      comfortaa: 'Comfortaa, sans-serif',
    },
  },
  content: [
    'src/**/*.{vue,js,jsx,mjs,ts,tsx}',
  ],
  plugins: [
    animate,
  ],
}
