/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: 'Active Connections',
		description: 'Active Connections is an accessible and inclusive fitness center designed with the whole community in mind. Active Connections provides an space for people with disabilities to exercises alongside the rest of the community.',
		author: `Chris Png`,
		image: `/ActiveConnections-c0670e0454739885934c02bf053c0dff.png`,
		url: `http://activeconnections.live/`,
		twitterUsername: `@activerockland`,
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
				icon: `src/images/icon.png`, // This path is relative to the root of the site.
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
						{
							family: `Open Sans`,
							variants: [`400`]
						},
          ],
        },
      },
		},
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
	],
}
