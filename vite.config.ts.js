// vite.config.ts
import path from "path";
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Unocss from "unocss/vite";
import { presetUno, transformerDirectives, transformerVariantGroup } from "unocss";
var vite_config_default = defineConfig({
  plugins: [
    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/components.d.ts"
    }),
    Unocss({
      presets: [
        presetUno()
      ],
      transformers: [transformerDirectives(), transformerVariantGroup()]
    }),
    AutoImport({
      imports: [
        "vue",
        "uni-app"
      ],
      dts: "./src/auto-imports.d.ts"
    }),
    uni()
  ],
  resolve: {
    alias: {
      "~/": `${path.resolve("/Users/ouduidui/Documents/Personal/Code/project/games", "src")}/`,
      "router/": `${path.resolve("/Users/ouduidui/Documents/Personal/Code/project/games", "src/router")}/`,
      "components/": `${path.resolve("/Users/ouduidui/Documents/Personal/Code/project/games", "src/components")}/`,
      "pages/": `${path.resolve("/Users/ouduidui/Documents/Personal/Code/project/games", "src/pages")}/`
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHVuaSBmcm9tICdAZGNsb3VkaW8vdml0ZS1wbHVnaW4tdW5pJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IHsgcHJlc2V0VW5vLCB0cmFuc2Zvcm1lckRpcmVjdGl2ZXMsIHRyYW5zZm9ybWVyVmFyaWFudEdyb3VwIH0gZnJvbSAndW5vY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZSddLFxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS9dLFxuICAgICAgZHRzOiAnc3JjL2NvbXBvbmVudHMuZC50cycsXG4gICAgfSksXG5cbiAgICBVbm9jc3Moe1xuICAgICAgcHJlc2V0czogW1xuICAgICAgICBwcmVzZXRVbm8oKSxcbiAgICAgIF0sXG4gICAgICB0cmFuc2Zvcm1lcnM6IFt0cmFuc2Zvcm1lckRpcmVjdGl2ZXMoKSwgdHJhbnNmb3JtZXJWYXJpYW50R3JvdXAoKV0sXG4gICAgfSksXG5cbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgICd1bmktYXBwJyxcbiAgICAgIF0sXG4gICAgICBkdHM6ICcuL3NyYy9hdXRvLWltcG9ydHMuZC50cycsXG4gICAgfSksXG5cbiAgICB1bmkoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnfi8nOiBgJHtwYXRoLnJlc29sdmUoXCIvVXNlcnMvb3VkdWlkdWkvRG9jdW1lbnRzL1BlcnNvbmFsL0NvZGUvcHJvamVjdC9nYW1lc1wiLCAnc3JjJyl9L2AsXG4gICAgICAncm91dGVyLyc6IGAke3BhdGgucmVzb2x2ZShcIi9Vc2Vycy9vdWR1aWR1aS9Eb2N1bWVudHMvUGVyc29uYWwvQ29kZS9wcm9qZWN0L2dhbWVzXCIsICdzcmMvcm91dGVyJyl9L2AsXG4gICAgICAnY29tcG9uZW50cy8nOiBgJHtwYXRoLnJlc29sdmUoXCIvVXNlcnMvb3VkdWlkdWkvRG9jdW1lbnRzL1BlcnNvbmFsL0NvZGUvcHJvamVjdC9nYW1lc1wiLCAnc3JjL2NvbXBvbmVudHMnKX0vYCxcbiAgICAgICdwYWdlcy8nOiBgJHtwYXRoLnJlc29sdmUoXCIvVXNlcnMvb3VkdWlkdWkvRG9jdW1lbnRzL1BlcnNvbmFsL0NvZGUvcHJvamVjdC9nYW1lc1wiLCAnc3JjL3BhZ2VzJyl9L2AsXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxXQUFXO0FBQUEsTUFDVCxZQUFZLENBQUMsS0FBSztBQUFBLE1BQ2xCLFNBQVMsQ0FBQyxVQUFVLFlBQVk7QUFBQSxNQUNoQyxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFFRCxPQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWjtBQUFBLE1BQ0EsY0FBYyxDQUFDLHNCQUFzQixHQUFHLHdCQUF3QixDQUFDO0FBQUEsSUFDbkUsQ0FBQztBQUFBLElBRUQsV0FBVztBQUFBLE1BQ1QsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLElBRUQsSUFBSTtBQUFBLEVBQ047QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE1BQU0sR0FBRyxLQUFLLFFBQVEseURBQXlELEtBQUs7QUFBQSxNQUNwRixXQUFXLEdBQUcsS0FBSyxRQUFRLHlEQUF5RCxZQUFZO0FBQUEsTUFDaEcsZUFBZSxHQUFHLEtBQUssUUFBUSx5REFBeUQsZ0JBQWdCO0FBQUEsTUFDeEcsVUFBVSxHQUFHLEtBQUssUUFBUSx5REFBeUQsV0FBVztBQUFBLElBQ2hHO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
