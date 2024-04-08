import React from 'react'
import './Clients.css'
import first from '../../assets/Ellipse 16.png'
import second from '../../assets/Ellipse 17.png'
import third from '../../assets/Ellipse 18.png'

const Clients = () => {
    return (
        <div className='clientContainer' >
            <div className='clientBox' >
                <h2>What Our Clients Say About Us</h2>
                <div className='userCardHolder' id='testimonials'>
                    <div className='userCardContainer' >
                        <div className='userCardInner' >
                            <img src={second} alt='first' />
                            <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0479 19.4525C14.1617 19.4554 13.2911 19.6806 12.5201 20.1062C13.6057 17.3681 15.4061 14.9537 17.7434 13.1019C17.8771 12.9946 17.9878 12.8627 18.0692 12.7137C18.1506 12.5647 18.2011 12.4015 18.2178 12.2335C18.2345 12.0655 18.217 11.8959 18.1665 11.7344C18.1159 11.573 18.0332 11.4228 17.9231 11.2925C17.8129 11.1622 17.6775 11.0543 17.5246 10.975C17.3717 10.8957 17.2043 10.8465 17.0318 10.8302C16.8594 10.8139 16.6854 10.8309 16.5197 10.8802C16.354 10.9295 16.1999 11.0101 16.0662 11.1174C11.2742 14.9114 9.14172 20.1646 9.14172 23.4216C9.14998 24.5732 9.50217 25.6976 10.1553 26.6574C10.8084 27.6172 11.7342 28.3709 12.8196 28.8266C13.522 29.1582 14.2913 29.3336 15.0718 29.3402C15.7588 29.3728 16.4455 29.269 17.0901 29.0352C17.7347 28.8015 18.3239 28.4426 18.8219 27.9803C19.3199 27.518 19.7164 26.962 19.9873 26.3459C20.2583 25.7299 20.3979 25.0666 20.3979 24.3964C20.3979 23.7261 20.2583 23.0629 19.9873 22.4468C19.7164 21.8307 19.3199 21.2747 18.8219 20.8124C18.3239 20.3502 17.7347 19.9913 17.0901 19.7575C16.4455 19.5237 15.7588 19.42 15.0718 19.4525H15.0479Z" fill="white" />
                                <path d="M28.3936 19.4528C27.5072 19.4546 26.6364 19.6798 25.8658 20.1065C26.9509 17.3713 28.7467 14.9577 31.0771 13.1022C31.2229 12.9997 31.3457 12.8693 31.4379 12.7189C31.5301 12.5684 31.5897 12.4012 31.6131 12.2275C31.6365 12.0538 31.6232 11.8772 31.5739 11.7087C31.5246 11.5402 31.4405 11.3833 31.3267 11.2477C31.2129 11.112 31.0718 11.0005 30.9121 10.92C30.7524 10.8395 30.5775 10.7917 30.3981 10.7795C30.2187 10.7673 30.0387 10.791 29.8691 10.8492C29.6995 10.9073 29.5439 10.9987 29.4119 11.1176C24.6199 14.9116 22.4874 20.1649 22.4874 23.4219C22.4931 24.5604 22.835 25.6733 23.4723 26.6276C24.1096 27.5819 25.0154 28.3373 26.0814 28.8035C26.8017 29.1448 27.5927 29.3205 28.3936 29.3171C29.0806 29.3497 29.7672 29.2459 30.4118 29.0121C31.0564 28.7784 31.6456 28.4195 32.1437 27.9572C32.6417 27.4949 33.0382 26.9389 33.3091 26.3228C33.58 25.7068 33.7197 25.0435 33.7197 24.3733C33.7197 23.703 33.58 23.0398 33.3091 22.4237C33.0382 21.8077 32.6417 21.2516 32.1437 20.7893C31.6456 20.3271 31.0564 19.9682 30.4118 19.7344C29.7672 19.5006 29.0806 19.3969 28.3936 19.4294V19.4528Z" fill="white" />
                            </svg>

                            <h4 className='userCardName' >Hannah Schmitt</h4>
                            <p className='userCardRole'>CTO,YTL Corporation LTD.</p>
                        </div>
                        <p className='userCardText' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </p>
                    </div>
                    <div className='userCardContainer' >
                        <div className='userCardInner' >
                            <img src={first} alt='first' />
                            <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0479 19.4525C14.1617 19.4554 13.2911 19.6806 12.5201 20.1062C13.6057 17.3681 15.4061 14.9537 17.7434 13.1019C17.8771 12.9946 17.9878 12.8627 18.0692 12.7137C18.1506 12.5647 18.2011 12.4015 18.2178 12.2335C18.2345 12.0655 18.217 11.8959 18.1665 11.7344C18.1159 11.573 18.0332 11.4228 17.9231 11.2925C17.8129 11.1622 17.6775 11.0543 17.5246 10.975C17.3717 10.8957 17.2043 10.8465 17.0318 10.8302C16.8594 10.8139 16.6854 10.8309 16.5197 10.8802C16.354 10.9295 16.1999 11.0101 16.0662 11.1174C11.2742 14.9114 9.14172 20.1646 9.14172 23.4216C9.14998 24.5732 9.50217 25.6976 10.1553 26.6574C10.8084 27.6172 11.7342 28.3709 12.8196 28.8266C13.522 29.1582 14.2913 29.3336 15.0718 29.3402C15.7588 29.3728 16.4455 29.269 17.0901 29.0352C17.7347 28.8015 18.3239 28.4426 18.8219 27.9803C19.3199 27.518 19.7164 26.962 19.9873 26.3459C20.2583 25.7299 20.3979 25.0666 20.3979 24.3964C20.3979 23.7261 20.2583 23.0629 19.9873 22.4468C19.7164 21.8307 19.3199 21.2747 18.8219 20.8124C18.3239 20.3502 17.7347 19.9913 17.0901 19.7575C16.4455 19.5237 15.7588 19.42 15.0718 19.4525H15.0479Z" fill="white" />
                                <path d="M28.3936 19.4528C27.5072 19.4546 26.6364 19.6798 25.8658 20.1065C26.9509 17.3713 28.7467 14.9577 31.0771 13.1022C31.2229 12.9997 31.3457 12.8693 31.4379 12.7189C31.5301 12.5684 31.5897 12.4012 31.6131 12.2275C31.6365 12.0538 31.6232 11.8772 31.5739 11.7087C31.5246 11.5402 31.4405 11.3833 31.3267 11.2477C31.2129 11.112 31.0718 11.0005 30.9121 10.92C30.7524 10.8395 30.5775 10.7917 30.3981 10.7795C30.2187 10.7673 30.0387 10.791 29.8691 10.8492C29.6995 10.9073 29.5439 10.9987 29.4119 11.1176C24.6199 14.9116 22.4874 20.1649 22.4874 23.4219C22.4931 24.5604 22.835 25.6733 23.4723 26.6276C24.1096 27.5819 25.0154 28.3373 26.0814 28.8035C26.8017 29.1448 27.5927 29.3205 28.3936 29.3171C29.0806 29.3497 29.7672 29.2459 30.4118 29.0121C31.0564 28.7784 31.6456 28.4195 32.1437 27.9572C32.6417 27.4949 33.0382 26.9389 33.3091 26.3228C33.58 25.7068 33.7197 25.0435 33.7197 24.3733C33.7197 23.703 33.58 23.0398 33.3091 22.4237C33.0382 21.8077 32.6417 21.2516 32.1437 20.7893C31.6456 20.3271 31.0564 19.9682 30.4118 19.7344C29.7672 19.5006 29.0806 19.3969 28.3936 19.4294V19.4528Z" fill="white" />
                            </svg>

                            <h4 className='userCardName' >Hannah Schmitt</h4>
                            <p className='userCardRole'>CEO, WCT Holdings LTD.</p>
                        </div>
                        <p className='userCardText' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </p>
                    </div>
                    <div className='userCardContainer' >
                        <div className='userCardInner' >
                            <img src={third} alt='first' />
                            <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0479 19.4525C14.1617 19.4554 13.2911 19.6806 12.5201 20.1062C13.6057 17.3681 15.4061 14.9537 17.7434 13.1019C17.8771 12.9946 17.9878 12.8627 18.0692 12.7137C18.1506 12.5647 18.2011 12.4015 18.2178 12.2335C18.2345 12.0655 18.217 11.8959 18.1665 11.7344C18.1159 11.573 18.0332 11.4228 17.9231 11.2925C17.8129 11.1622 17.6775 11.0543 17.5246 10.975C17.3717 10.8957 17.2043 10.8465 17.0318 10.8302C16.8594 10.8139 16.6854 10.8309 16.5197 10.8802C16.354 10.9295 16.1999 11.0101 16.0662 11.1174C11.2742 14.9114 9.14172 20.1646 9.14172 23.4216C9.14998 24.5732 9.50217 25.6976 10.1553 26.6574C10.8084 27.6172 11.7342 28.3709 12.8196 28.8266C13.522 29.1582 14.2913 29.3336 15.0718 29.3402C15.7588 29.3728 16.4455 29.269 17.0901 29.0352C17.7347 28.8015 18.3239 28.4426 18.8219 27.9803C19.3199 27.518 19.7164 26.962 19.9873 26.3459C20.2583 25.7299 20.3979 25.0666 20.3979 24.3964C20.3979 23.7261 20.2583 23.0629 19.9873 22.4468C19.7164 21.8307 19.3199 21.2747 18.8219 20.8124C18.3239 20.3502 17.7347 19.9913 17.0901 19.7575C16.4455 19.5237 15.7588 19.42 15.0718 19.4525H15.0479Z" fill="white" />
                                <path d="M28.3936 19.4528C27.5072 19.4546 26.6364 19.6798 25.8658 20.1065C26.9509 17.3713 28.7467 14.9577 31.0771 13.1022C31.2229 12.9997 31.3457 12.8693 31.4379 12.7189C31.5301 12.5684 31.5897 12.4012 31.6131 12.2275C31.6365 12.0538 31.6232 11.8772 31.5739 11.7087C31.5246 11.5402 31.4405 11.3833 31.3267 11.2477C31.2129 11.112 31.0718 11.0005 30.9121 10.92C30.7524 10.8395 30.5775 10.7917 30.3981 10.7795C30.2187 10.7673 30.0387 10.791 29.8691 10.8492C29.6995 10.9073 29.5439 10.9987 29.4119 11.1176C24.6199 14.9116 22.4874 20.1649 22.4874 23.4219C22.4931 24.5604 22.835 25.6733 23.4723 26.6276C24.1096 27.5819 25.0154 28.3373 26.0814 28.8035C26.8017 29.1448 27.5927 29.3205 28.3936 29.3171C29.0806 29.3497 29.7672 29.2459 30.4118 29.0121C31.0564 28.7784 31.6456 28.4195 32.1437 27.9572C32.6417 27.4949 33.0382 26.9389 33.3091 26.3228C33.58 25.7068 33.7197 25.0435 33.7197 24.3733C33.7197 23.703 33.58 23.0398 33.3091 22.4237C33.0382 21.8077 32.6417 21.2516 32.1437 20.7893C31.6456 20.3271 31.0564 19.9682 30.4118 19.7344C29.7672 19.5006 29.0806 19.3969 28.3936 19.4294V19.4528Z" fill="white" />
                            </svg>

                            <h4 className='userCardName' >Hannah Schmitt</h4>
                            <p className='userCardRole'>COO, UEM Group LTD</p>
                        </div>
                        <p className='userCardText' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Clients