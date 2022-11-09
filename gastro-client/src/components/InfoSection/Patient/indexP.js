import React from 'react'
import {Button} from '../../ButtonElement';
import { 
    BtnWrap, 
    Column1, 
    Column2, 
    Heading, 
    Img, 
    ImgWrap, 
    InfoContainer, 
    InfoRow, 
    InfoWrapper, 
    Subtitle, 
    TextWrapper, 
    TopLine,
    InputAria,
    SelectionAria
} from './infoelementP'

const InfoSection1 = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id} >
            <InfoWrapper>
                <InfoRow imgStart= {imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <InfoRow>
                              <label>Nom</label>
                              <InputAria></InputAria>
                              <label >Prénom</label>
                              <InputAria></InputAria>
                              <label>Sexe</label>
                              <SelectionAria>
                                <option value="homme">Homme</option> 
                                <option value="homme">Femme</option>
                              </SelectionAria>
                              <label>Age</label>
                              <InputAria></InputAria>
                              
                              <label>N.dossier</label>
                              <InputAria></InputAria>
                              <label>Etablissement Sanitaire</label>
                              <InputAria></InputAria>
                              <label>Antecedents</label>
                              <InputAria></InputAria>
                              </InfoRow>  
                            
                            <BtnWrap>
                             <Button to ='home'
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact="true"
                             offset={-80}
                             primary={primary ? 1 :0}
                             dark={dark ? 1 : 0}
                             dark2={dark2 ? 1 : 0}
                             >{buttonLabel}</Button>
                            </BtnWrap >
                        </TextWrapper>
                    </Column1>
                    <Column2>
                       <ImgWrap>
                         <Img src={img} alt={alt} />
                       </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>                                            
  );
};

export default InfoSection1