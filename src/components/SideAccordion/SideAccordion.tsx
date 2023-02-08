import { Typography, AccordionDetails, AccordionSummary } from '@mui/material';
import Accordion, { AccordionProps } from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const StyledAccordion = styled((props: AccordionProps) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: 'none',
  '&:not(:last-child)': {
    borderBottom: 'none',
  },
  '&:before': {
    display: 'none',
  },
}));

type SideAccordionProps = {
  title: string,
}

export const SideAccordion: React.FC<SideAccordionProps> = ({ title }) => {
  return (
    <StyledAccordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="sm" sx={{ color: 'primary.main' }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails />
    </StyledAccordion>
  );
};
