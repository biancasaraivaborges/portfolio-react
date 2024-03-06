//Componente - é um pouco da mistura de um CSS, JavaScript e HTML que costumamos fazer separados e o React traz isso tudo junto.
//Componente banner é uma função que retorna um componente

import './Banner.css'
function Banner (){
    // É JSX - isso parece html, mas não é!! É como o React lê e vai entender o que é isso e fazer um append no DOM. 
    return (
        <header className="banner">
            {/* class é uma palavra reservada para javascript, então no react usa classNAme */}
            <img src="/imagens/banner.png" alt="o banner principal da página do organo"/>
        </header>
        
        //uma imagem deve ter um texto alternativo
    )
}

export default Banner