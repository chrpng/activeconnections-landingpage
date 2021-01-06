/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: 'Active Connections',
		description: 'Exercise for every body',
		author: `Chris Png`,
	},
  plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Active Connections`,
        short_name: `AC`,
        start_url: `/`,
        background_color: `#bfe9f4`,
        theme_color: `#bfe9f4`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/img/icon.png`, // This path is relative to the root of the site.
      },
		},
		`gatsby-plugin-offline`,
		{
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Raleway`,
              variants: [`300`, `400`, `500i`],
						},
						{
							family: `Montserrat`,
							variants: [`300`]
						},
          ],
        },
      },
    },
	],
}
