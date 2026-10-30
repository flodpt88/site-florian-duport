import"./style-8eABPI5H.js";import{t as e}from"./config-A_VQIrrj.js";var t=document.querySelector(`.brief__form`),n=[...t.querySelectorAll(`.brief__step`)],r=t.querySelector(`.brief__back`),i=t.querySelector(`.brief__next`),a=t.querySelector(`.brief__send`),o=t.querySelector(`.form__status`),s=document.querySelector(`.brief__bar`),c=document.querySelector(`.brief__step-label`),l=`fd-brief-draft`,u=0;function d(){try{let e={};for(let n of t.elements)n.name&&n.name!==`botcheck`&&(n.type===`radio`?n.checked&&(e[n.name]=n.value):n.type===`checkbox`?e[n.name]=n.checked:e[n.name]=n.value);localStorage.setItem(l,JSON.stringify({at:u,data:e}))}catch{}}function f(){try{let e=JSON.parse(localStorage.getItem(l)||`null`);if(!e)return;for(let[n,r]of Object.entries(e.data||{}))t.querySelectorAll(`[name="${n}"]`).forEach(e=>{e.type===`radio`?e.checked=e.value===r:e.type===`checkbox`?e.checked=!!r:e.value=r});u=Math.min(e.at||0,n.length-1)}catch{}}t.addEventListener(`input`,d);function p(e){u=e,n.forEach((t,n)=>{t.hidden=n!==e}),r.hidden=e===0,i.hidden=e===n.length-1,a.hidden=e!==n.length-1,s.style.transform=`scaleX(${(e+1)/n.length})`,c.textContent=`Étape ${e+1} sur ${n.length} · ${n[e].dataset.title}`,o.textContent=``,d()}function m(e){let t=[...n[e].querySelectorAll(`input, textarea`)].find(e=>!e.checkValidity());return n[e].classList.toggle(`tried`,!!t),!t||(o.textContent=`Il manque une réponse : vérifiez les champs entourés en rouge.`,(t.type===`radio`?n[e].querySelector(`[name="${t.name}"]`):t).focus(),!1)}i.addEventListener(`click`,()=>{m(u)&&(p(u+1),document.querySelector(`.brief__intro`).scrollIntoView({behavior:`smooth`}))}),r.addEventListener(`click`,()=>p(u-1));function h(e){let t=e=>e&&String(e).trim()||`à compléter`,n=new Date().toLocaleDateString(`fr-FR`,{day:`numeric`,month:`long`,year:`numeric`});return`# Brief client — ${t(e.nom)}

Reçu le ${n} · Formule : landing page 200 € · Style souhaité : ${t(e.style)}
Contact : ${t(e.contact)} <${t(e.email)}>

## Réponses aux 12 questions (CLAUDE.md, Phase 1, option A)

1. **Nom et slogan** : ${t(e.nom)}${e.slogan?` · « ${e.slogan.trim()} »`:` · slogan à proposer`}
2. **Ce qui est vendu, et à qui** : ${t(e.activite)}
   Clients : ${t(e.clients)}
   Zone : ${t(e.ville)}
3. **Personnalité** : ${t(e.personnalite)}
4. **Couleurs** : ${e.couleurs?.trim()||`aucune, à proposer`}
5. **Polices** : aucune, à proposer
6. **Logo** : ${t(e.logo)}${e.photos?` (fichiers : ${e.photos.trim()})`:``}
7. **Produit ou service** : ${t(e.offre)}
8. **Bénéfices clés** : ${e.benefices?.trim()||`à déduire`}${e.difference?`\n   Ce qui distingue : ${e.difference.trim()}`:``}
9. **Ambiance visuelle** : ${e.ambiance?.trim()||`à proposer`}
10. **But principal du site** : ${t(e.objectif)}
11. **Coordonnées pour le site** : téléphone ${e.tel_public?.trim()||`—`} · e-mail ${e.email_public?.trim()||`—`} · adresse ${e.adresse?.trim()||`—`}
    Réseaux : ${e.reseaux?.trim()||`aucun`}
12. **Sites aimés / détesté** : ${e.aimes?.trim()||`—`} / ${e.deteste?.trim()||`—`}

## Compléments

- **Infos pratiques** : ${e.pratique?.trim()||`—`}
- **Questions fréquentes des clients** : ${e.faq?.trim()||`—`}
- **Photos et fichiers** : ${e.photos?.trim()||`aucun, images à créer`}
- **Existant (site, réseaux, fiche Google)** : ${e.existant?.trim()||`—`}
- **Avis clients** : ${e.avis?.trim()||`aucun pour l'instant`}
- **Nom de domaine souhaité** : ${e.domaine?.trim()||`à proposer`}
- **Mentions légales** : ${e.raison?.trim()||`raison sociale à compléter`} · SIRET ${e.siret?.trim()||`à compléter`}
`}var g=``;function _(){let e=new Blob([g],{type:`text/markdown;charset=utf-8`}),t=Object.assign(document.createElement(`a`),{href:URL.createObjectURL(e),download:`brief-client.md`});document.body.append(t),t.click(),t.remove()}document.querySelector(`.brief__download`).addEventListener(`click`,_);function v(e){t.hidden=!0,document.querySelector(`.brief__progress`).hidden=!0,c.hidden=!0;let n=document.querySelector(`.brief__done`);e&&(n.querySelector(`.brief__done-text`).textContent=e),n.hidden=!1,n.scrollIntoView({behavior:`smooth`});try{localStorage.removeItem(l)}catch{}}t.addEventListener(`submit`,async n=>{if(n.preventDefault(),!m(u))return;let r=Object.fromEntries(new FormData(t));r.botcheck||(g=h(r),v(`Votre brief est prêt. Téléchargez-le ci-dessous et envoyez-le à ${e}. Votre page sera en ligne 3 jours après.`))}),f(),p(u);