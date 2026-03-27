# Brio Landing Page

Landing page premium da **Brio** construída com **HTML, CSS e JavaScript puro**, pronta para publicação automática no **GitHub Pages**.

## Publicação no GitHub Pages (já configurado)

Este repositório já possui workflow de deploy em:

- `.github/workflows/deploy-pages.yml`

### Como ativar no seu repositório

1. Faça push deste projeto para o GitHub.
2. Vá em **Settings → Pages**.
3. Em **Build and deployment**, selecione **Source: GitHub Actions**.
4. Garanta que sua branch padrão seja `main` (ou `master`, ambas estão cobertas no workflow).
5. Faça um novo push (ou rode o workflow manualmente em **Actions**).

Depois do deploy, a URL ficará neste formato:

- `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/`

## Rodar localmente

Você pode abrir o `index.html` diretamente no navegador, ou servir com um servidor local:

```bash
python3 -m http.server 8080
```

Acesse:

- `http://localhost:8080`

## Estrutura

- `index.html` → estrutura e conteúdo
- `style.css` → visual premium responsivo
- `script.js` → interações, animações e integração Vanta.js
