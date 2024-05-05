import terser from '@rollup/plugin-terser';
export default [
    {
        input: './src/iife_index.js',
        output: [
            {
                file: 'dist/ogl_iife.js',
                format: 'iife',
            },
            {
                file: 'dist/ogl_iife.min.js',
                format: 'iife',
                plugins: [terser()],
            },
        ],
    },
    {
        input: './src/index.js',
        output: [
            {
                file: 'dist/ogl.js',
                format: 'es',
            },
            {
                file: 'dist/ogl_cjs.js',
                format: 'cjs',
            },
            {
                file: 'dist/ogl.min.js',
                format: 'es',
                plugins: [terser()],
            },
            {
                file: 'dist/ogl_cjs.min.js',
                format: 'cjs',
                plugins: [terser()],
            },
        ],
    },
];
