import React from 'react'


const NewOrderView = () => {
    return(
        <div className='neworder_container'>
            <p>НОВОЕ ОБЪЯВЛЕНИЕ</p>

            <form>
                <input type='text' placeholder="Заголовок объявления..." />
                <textarea placeholder="Описание объявления..."></textarea>
                <input type='text' placeholder="Какое вознаграждение?" />
                <input type='text' placeholder="Ваш город?" />
                <input type='text' placeholder="Как с вами связаться?" />
                <button>ДОБАВИТЬ</button>
            </form>
        </div>
    )
}

export default NewOrderView;
