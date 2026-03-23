# 🖥️ Backstage HUB

## 🖥️ Backstage Split Screen

Aplicação que permite fazer o upload de uma imagem e **dividi-la automaticamente em duas versões**:

* 🟦 **Imagem Central** (1920 × 1080)
* 🟩 **Imagem Lateral (Aside)** (1366 × 768), composta pelas laterais esquerda e direita da imagem original

## ✨ Funcionalidades

* Geração automática de:
  * imagem **central**
  * imagem **lateral** (união das duas laterais)
* Preview imediato dos resultados
* Interface simples com drag & drop visual

## 🖼️ Resolução recomendada da imagem

Para garantir o funcionamento correto dos cortes e a melhor qualidade dos resultados, a imagem ideal para upload deve ter a resolução de: **3286 × 1080**

### Por que 3286 × 1080?
Essa resolução permite dividir a imagem horizontalmente em três áreas proporcionais:
* 683 px - lateral esquerda (1366px / 2)
* 1920 px - área central
* 683 px - lateral direita (1366px / 2)

> [!NOTE]  
> Imagens com resoluções diferentes ainda podem funcionar, mas o resultado pode não ficar alinhado.


## 🔧 Possíveis melhorias futuras

* Versão para vídeo
