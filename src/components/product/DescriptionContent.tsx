import { styled } from 'styled-components';

export default function DescriptionContent() {
  return (
    <StyledList>
      <li>
        <DescrTitle>Maximized Wireless Experience</DescrTitle>
        <p>
          With a straightforward one-tap setup, AirPods instantly turn on and
          maintain a constant connection. Their usage is incredibly
          user-friendly; they can detect when they are in your ears and
          automatically pause when you remove them. The exceptional experience
          of using AirPods is consistent across all your devices, whether it's
          your iPhone, Apple Watch, iPad, or Mac.
        </p>
      </li>
      <li>
        <DescrTitle>Unparalleled 24-Hour Battery Life</DescrTitle>
        <p>
          AirPods boast a market-leading 5 hours of playback time and now, up to
          3 hours of conversation time, all from a single charge. They are
          designed to keep pace with your active lifestyle, courtesy of a
          charging case that holds multiple charges, amounting to over 24 hours
          of playback time. Need a quick boost? Simply place the AirPods back
          into the case for 15 minutes to achieve up to 3 hours of playback and
          2 hours of conversation time. To assess the battery level, place the
          AirPods close to your iPhone or inquire Siri, "What is the battery
          status of my AirPods?"
        </p>
      </li>
      <li>
        <DescrTitle>Swift Setup, Effortless Listening</DescrTitle>
        <p>
          AirPods instantly connect to your iPhone or Apple Watch, and the audio
          transition between devices is seamless. Interested in connecting to
          your Mac or iPad? Simply select AirPods on those devices for a
          hassle-free setup and magical results
        </p>
      </li>
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const DescrTitle = styled.h5`
  color: #1b5a7d;
`;
