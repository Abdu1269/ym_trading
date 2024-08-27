import withPlugins from "next-compose-plugins";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.yenechinet.com",
        port: "",
        pathname: "*/*/**",
      },
    ],
  },
  webpack(config, options) {
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.oneOf) {
        rule.oneOf = rule.oneOf.map((subRule) => {
          if (subRule.test && subRule.test.test && subRule.test.test(".svg")) {
            subRule.exclude = /\.svg$/;
          }
          return subRule;
        });
      } else if (rule.test && rule.test.test && rule.test.test(".svg")) {
        rule.exclude = /\.svg$/;
      }
      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default withPlugins([], nextConfig);
