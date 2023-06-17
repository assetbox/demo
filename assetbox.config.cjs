const { react } = require("@assetbox/plugin-react-icon");

/**
 * @type {import('@assetbox/cli').AssetBoxScheme}
 */
const config = {
  categories: {
    "antd-filled": ["./antd/filled/**/*"],
    "antd-outlined": ["./antd/outlined/**/*"],
    "antd-twotone": ["./antd/twotone/**/*"],
  },
  staticBuild: {
    base: "/demo",
    mode: "library",
  },
  iconBuild: {
    plugins: [react()],
  },
};

module.exports = config;
