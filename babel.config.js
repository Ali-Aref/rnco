module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
				// for pathing
        "module-resolver",
        {
          root: ["./"],
          alias: {
            components: "./components",
          },
        },
				// reanimated
				"react-native-reanimated/plugin",
      ],
    ],
  };
};
