import styles from './Company.module.css';

function Company() {
    return (<>
        <div className={styles.company_container}>
            <h1>Gereciador de Projetos</h1>
            <p >
                Olá, eu fiz esse gerenciador por meio de um video aula no YouTube, no canal Hora de codar!
            </p>

            <p>Uma ótima ferramenta para você usar na sua empressa e controlar os projetos e orçamentos, assim podendo altera-lo
                quando quiser.
            </p>

            <a href="https://www.youtube.com/watch?v=FXqX7oof0I4&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=1">Link do video</a>
        </div>
        <div className={styles.company_container}>
            <h1>Developer</h1>
            <p >
                Me chamo Yasmin, sou Desenvolvedora Front-end é estou começando no React. Vou deixar minhas
                redes sociais no footer para você me conhecer melhor!
            </p>

        </div>
    </>
    )
}

export default Company;