import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Typography from "@mui/material/Typography";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odio officia! Adipisci exercitationem quas, quaerat voluptatem pariatur maiores, voluptatum molestiae iste corrupti inventore id, distinctio praesentium dolorum ipsum repudiandae illo! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem culpa ex sunt corporis ipsa accusamus, earum adipisci accusantium quaerat laudantium tempore repudiandae possimus blanditiis totam facilis iusto molestias laboriosam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Second Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quis eveniet quasi excepturi laboriosam placeat asperiores tenetur deserunt nobis qui itaque repellendus voluptates quos fugiat, aperiam, harum ut, perspiciatis ex.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Third Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit vero necessitatibus minima voluptatibus earum aliquam eligendi ex ab laboriosam omnis, laudantium tenetur error voluptatem illo doloribus nobis corrupti harum?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Fourth FAQ Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum animi sint asperiores doloremque vel, magni rem obcaecati quam placeat, maxime nihil quod dolore sunt eligendi delectus nostrum velit dignissimos odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolore dignissimos harum maxime, sed reiciendis inventore, reprehenderit vel, officiis recusandae voluptatibus sint. Modi animi perspiciatis expedita tenetur quos corrupti a!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Fifth FAQ Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dicta? Provident libero repellendus velit? Sit excepturi earum, reiciendis voluptatibus maiores sed. In ut beatae possimus, voluptatibus commodi dicta. Itaque, consectetur!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;