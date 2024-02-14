"use client"
import { Grid } from "@mui/material"
import Cards from "./cards"
import Common from "./Common"
import Container from "./Container"
import {useMediaQuery} from "@mui/material"

export default function Portfolio(){
const isMobile = useMediaQuery("(max-width:600px)");
const isTabletScreen = useMediaQuery("(max-width:899px)");

const portfolioData=[
    {
        "title": "MEFIC Saudi Riyal Murabaha Fund for the period ending on 2023-12-31",
        "paragraph": "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.",
        "image": "assets/Rectangle 15.svg",
        "linkHref": "#"
      },
      {
        "title": "MEFIC signs a MOU for 300 rooms with Boudl Hotels and Resorts Group",
        "paragraph": "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth..",
        "image": "assets/hotel.svg",
        "linkHref": "#"
      },
      {
        "title": "partnership to establish the first Saudi investment fund to finance film",
        "paragraph": "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.",
        "image": "assets/partnership.svg",
        "linkHref": "#"
      }
    ]
    
return(
    <>
<Container>
    <Common 
    H1="The" main=" latest news " H2="and our " bold="portfolio companies" paragraph="Office ipsum you must be muted. Conversation banner gave dive investigation chime usabiltiy whatever. Winning of crystallize another container reinvent stands. Left you viral relaxation unlock t-shaped. Ideal deck support attached waste highlights game synchronise." />
     <Grid Container sx={{display:"flex",flexDirection: isMobile? "column" :isTabletScreen?"row":"" ,justifyContent:"center" }} >
        {/* card 1  */}
        {portfolioData.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Cards
                H1={item.title}
                para={item.paragraph}
                image={item.image}
                link_href={item.linkHref}
              />
            </Grid>
          ))}
    </Grid>
</Container>
    </>
    )
}