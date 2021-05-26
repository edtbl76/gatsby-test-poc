import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
        site {
            siteMetadata {
                author {
                    name
                    summary
                }
                social {
                    twitter
                }
            }
        }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social


  return (
    <div className={"bio"}>
      <StaticImage
        className={"bio-avatar"}
        layout={"fixed"}
        formats={["AUTO", "WEBP", "AVIF"]}
        src={"../images/profile.png"}
        width={50}
        height={50}
        quality={95}
        alt={"Profile Picture"}
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong>. <br />
          {author?.summary || null}
        </p>
      )}
    </div>
  )
}

export default Bio