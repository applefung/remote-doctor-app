import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "doctor",
      filename: "doctor.js",
      exposes: {
        "./Button": "./src/components/Button.tsx",
        "./DoctorDetail": "./src/pages/Doctors/Detail.tsx",
        "./DoctorList": "./src/pages/Doctors/index.tsx",
      },
      remotes: {
        // ! localhost
        shared: "http://localhost:5001/assets/shared.js",
        // container: "http://localhost:5003/assets/container.js",
        // ! s3
        // shared: 'https://s3.ap-southeast-1.amazonaws.com/remote-app1.com/shared/dist/assets/shared.js',
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "react-redux",
        "@reduxjs/toolkit",
      ],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    host: "localhost",
    port: 5000,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
