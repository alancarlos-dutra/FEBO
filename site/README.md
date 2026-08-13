# Associação Renovar Vidas — Landing Page

Arquivos criados:

- `site/index.html`
- `site/assets/css/style.css`
- `site/assets/js/main.js`

Um logo SVG de exemplo foi criado em `site/assets/logo/logo.svg`. Substitua por sua arte em PNG/SVG se preferir.

 Como usar:
 
 1. Abra `site/index.html` no navegador.
 2. Para adicionar imagens, coloque arquivos em `site/assets/images/` e substitua as divs `.img-placeholder` por tags `<img src="assets/images/SEU_ARQUIVO.jpg" alt="...">`.
 	- Sugestão de nomes usados no template: `acao-1.jpg` ... `acao-7.jpg`.
 3. Coloque o logo e o favicon em `site/assets/logo/` como `logo.png` and `favicon.ico`.
 	- Um logo SVG de exemplo foi criado: `site/assets/logo/logo.svg`.
 	- Um favicon SVG de exemplo foi criado em `site/assets/logo/favicon.svg`.
	5. Para gerar `favicon-32.png` e `favicon-16.png` a partir do SVG, rode o script abaixo (requer Node.js):

	```bash
	cd site
	npm install
	npm run build:favicons
	```

	Os arquivos serão criados em `site/assets/logo/`.
4. O menu é responsivo; em telas pequenas use o botão de menu para navegar.

Se quiser, eu posso ajustar cores, tipografia ou exportar para um deploy simples.
