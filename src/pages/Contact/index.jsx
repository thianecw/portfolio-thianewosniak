import { GithubLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";
import { EmailCopyButton } from "../../components/EmailCopyButton"
import {MainContainer, Title, ContactBox, ContactIcons} from "./styles";

export function Contact () {

    return (
<MainContainer> 
<Title> Contato </Title>
<ContactBox>
<EmailCopyButton />
<ContactIcons>
    <a href="https://www.linkedin.com/in/thiane-wosniak/" target="_blank" rel="noopener noreferrer">
<LinkedinLogo size={30} /> </a>

    <a href="https://github.com/thianecw" target="_blank" rel="noopener noreferrer">
<GithubLogo size={30} /> </a>

    <a href="https://wa.me/5547992182468" target="_blank" rel="noopener noreferrer">
<WhatsappLogo size={30}/>  </a>
</ContactIcons>
</ContactBox>
</MainContainer>
    )
}  