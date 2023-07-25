export default [
  {
    context: [
        '/api/todo/',
        '/api/auth/token/login/'
    ],
    target: 'http://joldibaev.uz',
    changeOrigin: true,
    secure: false,
    logLevel: "debug"
  }
];
