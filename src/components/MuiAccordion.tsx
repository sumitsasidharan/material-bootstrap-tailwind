import React, { useState } from 'react';
import {
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const accordionArray = [
   {
      acc_id: 'panel1-header',
      aria_control: 'panel1-content',
      question: 'Question 1',
      answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
   },
   {
      acc_id: 'panel2-header',
      aria_control: 'panel2-content',
      question: 'Question 2',
      answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
   },
   {
      acc_id: 'panel3-header',
      aria_control: 'panel3-content',
      question: 'Question 3',
      answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
   },
];

export const MuiAccordion = () => {
   const [expanded, setExpanded] = useState<string | false>(false);

   // handlechange func so that only 1 accordion is expanded.
   const handleAccordionChange = (isExpanded: boolean, panel: string) => {
      setExpanded(isExpanded ? panel : false);
   }

   return (
      <div>
         {/* ACCORDION GROUP */}
         {accordionArray.map((accordion) => {
            return (
               <Accordion
                  key={accordion.acc_id}
                  expanded={expanded === accordion.acc_id}
                  onChange={(event, isExpanded) =>
                     handleAccordionChange(isExpanded, accordion.acc_id)
                  }>
                  <AccordionSummary
                     id={accordion.acc_id}
                     aria-controls={accordion.aria_control}
                     expandIcon={<ExpandMoreIcon />}>
                     <Typography>{accordion.question}</Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                     <Typography>{accordion.answer}</Typography>
                  </AccordionDetails>
               </Accordion>
            );
         })}

         <Accordion>
            <AccordionSummary
               id="panel1-header"
               aria-controls="panel1-content"
               expandIcon={<ExpandMoreIcon />}>
               <Typography>Accordion 1</Typography>
            </AccordionSummary>

            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Commodi at quod assumenda perferendis repudiandae veritatis,
                  vero, ea dolorum quas odit quos incidunt pariatur aperiam aut
                  eum, ipsam alias? Dolor, amet.
               </Typography>
            </AccordionDetails>
         </Accordion>
      </div>
   );
};
