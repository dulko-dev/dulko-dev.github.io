import React, { useEffect, useState } from "react";
import {
  AboutContainer,
  AboutTag,
  AboutTagP,
  TextTag,
  TextTagTitle,
  TextTagP,
  AboutContent,
  Image,
  ImageDiv,

} from "./style";

const About = () => {
  const [stackUpper, setStackUpper] = useState(false);
  const [stackBottom, setStackBottom] = useState(false);

  useEffect(() => {
    const aboutFixed = () => {
      let el = document.querySelector("#cont");
      if (el.getBoundingClientRect().top <= 0) {
        setStackUpper(true);
      } else {
        setStackUpper(false);
      }
    };
    window.addEventListener("scroll", aboutFixed);
  }, []);

  useEffect(() => {
    let el = document.querySelector("#cont");
    const bottomSucks = () => {
      if (el.getBoundingClientRect().bottom <= window.innerHeight) {
        setStackUpper(false);
        setStackBottom(true);
      } else {
        setStackBottom(false);
      }
    };
    window.addEventListener("scroll", bottomSucks);
  }, []);

  return (
    <AboutContainer>
      <AboutContent>
        <AboutTag fix={stackUpper} over={stackBottom}>
          <AboutTagP>About</AboutTagP>
        </AboutTag>
        <TextTag id="cont">
    
       
          <TextTagTitle>Title 1</TextTagTitle>
          <TextTagP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nemo
            dubitet, eorum omnia officia quo spectare, quid sequi, quid fugere
            debeant? Effluit igitur voluptas corporis et prima quaeque avolat
            saepiusque relinquit causam paenitendi quam recordandi. Tantum dico,
            magis fuisse vestrum agere Epicuri diem natalem, quam illius
            testamento cavere ut ageretur. Et quae per vim oblatum stuprum
            volontaria morte lueret inventa est et qui interficeret filiam, ne
            stupraretur. Quodsi, ne quo incommodo afficiare, non relinques
            amicum, tamen, ne sine fructu alligatus sis, ut moriatur optabis.
            Quid enim mihi potest esse optatius quam cum Catone, omnium virtutum
            auctore, de virtutibus disputare? Duo Reges: constructio interrete.
            Haec et tu ita posuisti, et verba vestra sunt. Sin est etiam corpus,
            ista explanatio naturae nempe hoc effecerit, ut ea, quae ante
            explanationem tenebamus, relinquamus. Cur iustitia laudatur? Quam
            illa ardentis amores excitaret sui! Cur tandem? Sed id ne cogitari
            quidem potest quale sit, ut non repugnet ipsum sibi. Potius
            inflammat, ut coercendi magis quam dedocendi esse videantur.
            Quocirca intellegi necesse est in ipsis rebus, quae discuntur et
            cognoscuntur, invitamenta inesse, quibus ad discendum
            cognoscendumque moveamur. Nec vero sum nescius esse utilitatem in
            historia, non modo voluptatem. Quaero igitur, quo modo hae tantae
            commendationes a natura profectae subito a sapientia relictae sint.
            Quod quidem mihi si quando dictum est-est autem dictum non parum
            saepe-, etsi satis clemens sum in disputando, tamen interdum soleo
            subirasci. Qui non moveatur et offensione turpitudinis et
            comprobatione honestatis? Quod enim vituperabile est per se ipsum,
            id eo ipso vitium nominatum puto, vel etiam a vitio dictum
            vituperari. Tamen a proposito, inquam, aberramus. Scientiam
            pollicentur, quam non erat mirum sapientiae cupido patria esse
            cariorem. Ut enim consuetudo loquitur, id solum dicitur honestum,
            quod est populari fama gloriosum. Videsne quam sit magna dissensio?
            Ex quo illud efficitur, qui bene cenent omnis libenter cenare, qui
            libenter, non continuo bene. Atque etiam valítudinem, vires,
            vacuitatem doloris non propter utilitatem solum, sed etiam ipsas
            propter se expetemus. Sin ea non neglegemus neque tamen ad finem
            summi boni referemus, non multum ab Erilli levitate aberrabimus. Ab
            his oratores, ab his imperatores ac rerum publicarum principes
            extiterunt. Suo genere perveniant ad extremum; Istam voluptatem
            perpetuam quis potest praestare sapienti? Innumerabilia dici possunt
            in hanc sententiam, sed non necesse est. Quamquam non negatis nos
            intellegere quid sit voluptas, sed quid ille dicat. Quae hic rei
            publicae vulnera inponebat, eadem ille sanabat. Ita ne hoc quidem
            modo paria peccata sunt. In ipsa enim parum magna vis inest, ut quam
            optime se habere possit, si nulla cultura adhibeatur.
          </TextTagP>
          <TextTagTitle>Title 1</TextTagTitle>
          <TextTagP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nemo
            dubitet, eorum omnia officia quo spectare, quid sequi, quid fugere
            debeant? Effluit igitur voluptas corporis et prima quaeque avolat
            saepiusque relinquit causam paenitendi quam recordandi. Tantum dico,
            magis fuisse vestrum agere Epicuri diem natalem, quam illius
            testamento cavere ut ageretur. Et quae per vim oblatum stuprum
            volontaria morte lueret inventa est et qui interficeret filiam, ne
            stupraretur. Quodsi, ne quo incommodo afficiare, non relinques
            amicum, tamen, ne sine fructu alligatus sis, ut moriatur optabis.
            Quid enim mihi potest esse optatius quam cum Catone, omnium virtutum
            auctore, de virtutibus disputare? Duo Reges: constructio interrete.
            Haec et tu ita posuisti, et verba vestra sunt. Sin est etiam corpus,
            ista explanatio naturae nempe hoc effecerit, ut ea, quae ante
            explanationem tenebamus, relinquamus. Cur iustitia laudatur? Quam
            illa ardentis amores excitaret sui! Cur tandem? Sed id ne cogitari
            quidem potest quale sit, ut non repugnet ipsum sibi. Potius
            inflammat, ut coercendi magis quam dedocendi esse videantur.
            Quocirca intellegi necesse est in ipsis rebus, quae discuntur et
            cognoscuntur, invitamenta inesse, quibus ad discendum
            cognoscendumque moveamur. Nec vero sum nescius esse utilitatem in
            historia, non modo voluptatem. Quaero igitur, quo modo hae tantae
            commendationes a natura profectae subito a sapientia relictae sint.
            Quod quidem mihi si quando dictum est-est autem dictum non parum
            saepe-, etsi satis clemens sum in disputando, tamen interdum soleo
            subirasci. Qui non moveatur et offensione turpitudinis et
            comprobatione honestatis? Quod enim vituperabile est per se ipsum,
            id eo ipso vitium nominatum puto, vel etiam a vitio dictum
            vituperari. Tamen a proposito, inquam, aberramus. Scientiam
            pollicentur, quam non erat mirum sapientiae cupido patria esse
            cariorem. Ut enim consuetudo loquitur, id solum dicitur honestum,
            quod est populari fama gloriosum. Videsne quam sit magna dissensio?
            Ex quo illud efficitur, qui bene cenent omnis libenter cenare, qui
            libenter, non continuo bene. Atque etiam valítudinem, vires,
            vacuitatem doloris non propter utilitatem solum, sed etiam ipsas
            propter se expetemus. Sin ea non neglegemus neque tamen ad finem
            summi boni referemus, non multum ab Erilli levitate aberrabimus. Ab
            his oratores, ab his imperatores ac rerum publicarum principes
            extiterunt. Suo genere perveniant ad extremum; Istam voluptatem
            perpetuam quis potest praestare sapienti? Innumerabilia dici possunt
            in hanc sententiam, sed non necesse est. Quamquam non negatis nos
            intellegere quid sit voluptas, sed quid ille dicat. Quae hic rei
            publicae vulnera inponebat, eadem ille sanabat. Ita ne hoc quidem
            modo paria peccata sunt. In ipsa enim parum magna vis inest, ut quam
            optime se habere possit, si nulla cultura adhibeatur uuu.
          </TextTagP>
        </TextTag>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
