import {
  StyledInput,
  StyledFormWrapper,
  StyledForm,
  StyledFieldSet,
  StyledTextArea,
  StyledButton,
} from "../styles/styles";

export const Form = () => {
  return (
    <StyledFormWrapper>
      <StyledForm>
        <form>
          <h2>Form</h2>
          <label htmlFor="name">Name</label>
          <StyledInput type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <StyledInput type="email" name="email" id="email" />
          <StyledFieldSet>
            <legend>Gender</legend>
            <label>
              <input type="radio" value="female" name="gender" />
              Female
            </label>
            <label>
              <input type="radio" value="male" name="gender" />
              Male
            </label>
          </StyledFieldSet>
          <label htmlFor="message">Message</label>
          <StyledTextArea name="message" />
          <StyledButton type="submit">Send message</StyledButton>
        </form>
      </StyledForm>
    </StyledFormWrapper>
  );
};
