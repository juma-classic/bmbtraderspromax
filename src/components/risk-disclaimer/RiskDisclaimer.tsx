import React from 'react';
import Modal from '@/components/shared_ui/modal';
import Text from '@/components/shared_ui/text';
import './RiskDisclaimer.scss';

const RiskDisclaimer = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleUnderstand = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button className='risk-disclaimer-button' onClick={toggleModal} aria-label='Risk Disclaimer'>
                <svg className='risk-disclaimer-button__icon' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12 2L2 20h20L12 2zm0 4l7 12H5l7-12zm-1 5v4h2v-4h-2zm0 5v2h2v-2h-2z' fill='currentColor' />
                </svg>
                <span className='risk-disclaimer-button__text'>Risk Disclaimer</span>
            </button>

            <Modal
                className='risk-disclaimer-modal'
                title='⚠️ Risk Disclaimer'
                is_open={isModalOpen}
                toggleModal={toggleModal}
                width='600px'
            >
                <Modal.Body>
                    <div className='risk-disclaimer-modal__content'>
                        <Text as='p' className='risk-disclaimer-modal__text'>
                            Deriv offers complex derivatives, such as options and contracts for difference ("CFDs"). 
                            These products may not be suitable for all clients, and trading them puts you at risk.
                        </Text>
                        <Text as='p' className='risk-disclaimer-modal__text'>
                            Please make sure that you understand the following risks before trading Deriv products:
                        </Text>
                        <div className='risk-disclaimer-modal__list'>
                            <Text as='p' className='risk-disclaimer-modal__list-item'>
                                <span className='risk-disclaimer-modal__list-label'>a)</span> You may lose some or all of the money you invest in the trade
                            </Text>
                            <Text as='p' className='risk-disclaimer-modal__list-item'>
                                <span className='risk-disclaimer-modal__list-label'>b)</span> If your trade involves currency conversion, exchange rates will affect your profit and loss
                            </Text>
                        </div>
                        <div className='risk-disclaimer-modal__warning'>
                            <Text as='p' className='risk-disclaimer-modal__warning-text'>
                                You should never trade with borrowed money or with money that you cannot afford to lose.
                            </Text>
                        </div>
                        <div className='risk-disclaimer-modal__footer'>
                            <button className='risk-disclaimer-modal__button' onClick={handleUnderstand}>
                                I Understand
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default RiskDisclaimer;
