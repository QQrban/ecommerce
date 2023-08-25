import { styled } from 'styled-components';
import Poster from './Poster';
import { useTranslation } from 'react-i18next';
import car from '../../assets/car.svg';
import phone from '../../assets/phone.svg';
import ServiceItem from './ServiceItem';
import Accordion from 'react-bootstrap/Accordion';

export default function DriveIn() {
  const { t } = useTranslation();

  const stepsList = [
    t('services.driveIn.steps.arrive'),
    t('services.driveIn.steps.call'),
    t('services.driveIn.steps.weBring'),
    t('services.driveIn.steps.conclusion'),
  ];

  return (
    <DriveInWrapper>
      <Poster
        title={t('services.driveIn.poster.title')}
        text={t('services.driveIn.poster.descr')}
        img={car}
      />
      <ServiceItem
        title={t('services.driveIn.steps.title')}
        benefits={stepsList}
        img={phone}
      />
      <AccordionWrapper>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{t('services.faq.title')}</Accordion.Header>
          <StyledAccordionBody>
            <div>
              <Question>
                <b>{t('services.faq.what.title')}</b>
              </Question>
              <QuestionAnswer>{t('services.faq.what.descr')}</QuestionAnswer>
            </div>
            <div>
              <Question>
                <b>{t('services.faq.when.title')}</b>
              </Question>
              <QuestionAnswer>{t('services.faq.when.descr')}</QuestionAnswer>
            </div>
            <div>
              <Question>
                <b>{t('services.faq.doIHave.title')}</b>
              </Question>
              <QuestionAnswer>{t('services.faq.doIHave.descr')}</QuestionAnswer>
            </div>
            <div>
              <Question>
                <b>{t('services.faq.whatGoods.title')}</b>
              </Question>
              <QuestionAnswer>
                {t('services.faq.whatGoods.descr')}
              </QuestionAnswer>
            </div>
          </StyledAccordionBody>
        </Accordion.Item>
      </AccordionWrapper>
    </DriveInWrapper>
  );
}

const DriveInWrapper = styled.div`
  flex: 1;
`;

const AccordionWrapper = styled(Accordion)`
  margin-top: 30px;
`;

const Question = styled.div``;

const StyledAccordionBody = styled(Accordion.Body)`
  background: #f4f4f4;
  div:not(:first-child) ${Question} {
    margin-top: 21px;
  }
`;

const QuestionAnswer = styled.div`
  margin-top: 10px;
`;
