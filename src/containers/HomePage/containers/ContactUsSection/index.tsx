import React, { useState } from 'react';
import './styles.scss';
import { SectionEnum } from 'enums/sections';
import { useTranslation } from 'react-i18next';
import { useForm } from 'hooks/Forms';
import Input from 'components/Input';
import { emailRegex } from 'utils/regex';
import Button from 'components/Button';
import Effects from 'components/Effects';
import { ContactUsRequest } from './interface';

function ContactUsSection() {
    const { t } = useTranslation();
    // indicates if currently awaiting submission response
    const [loading, setLoading] = useState(false);
    // form logic
    const { register } = useForm<ContactUsRequest>({
        url: '',
        onSuccess: () => {
            /*
                toast.success({
                    message: t(
                        cvss
                            ? 'form.CHANGES_SAVED_WITH_SUCCESS'
                            : 'settingsPage.NEW_CVSS_SUBMIT_SUCCESS_MESSAGE',
                    ),
                });
                */
            setLoading(false);
        },
        onError: () => {
            setLoading(false);
        },
    });

    return (
        <div className='contact-us-section' id={SectionEnum.ContactUs}>
            <div className='contact-us-section__content'>
                <div className='contact-us-section__content__left-side'>
                    <Effects
                        duration={0.8}
                        triggerOnElementPositionOnScreen={95}
                        initialState={{ opacity: 0, scale: 0.5 }}
                        finalState={{ opacity: 1, scale: 1 }}
                    >
                        <p>{t('contactUs.TELL_US')}</p>
                    </Effects>
                </div>
                <div className='contact-us-section__content__right-side'>
                    <Effects
                        duration={0.8}
                        triggerOnElementPositionOnScreen={95}
                        initialState={{ opacity: 0, positionX: '200px' }}
                        finalState={{ opacity: 1, positionX: '0px' }}
                    >
                        <div>
                            <Input
                                placeholder={t('form.NAME')}
                                {...register('name', {
                                    $required: true,
                                    resolveError: () =>
                                        t('form.REQUIRED_FIELD'),
                                })}
                            />
                        </div>
                    </Effects>
                    <Effects
                        duration={0.8}
                        delay={0.2}
                        triggerOnElementPositionOnScreen={95}
                        initialState={{ opacity: 0, positionX: '200px' }}
                        finalState={{ opacity: 1, positionX: '0px' }}
                    >
                        <div>
                            <Input
                                placeholder={t('form.EMAIL')}
                                {...register('email', {
                                    regex: emailRegex,
                                    $required: true,
                                    resolveError: () => t('form.EMAIL_INVALID'),
                                })}
                            />
                        </div>
                    </Effects>
                    <Effects
                        duration={0.8}
                        delay={0.4}
                        triggerOnElementPositionOnScreen={95}
                        initialState={{ opacity: 0, positionX: '200px' }}
                        finalState={{ opacity: 1, positionX: '0px' }}
                    >
                        <div>
                            <Input
                                placeholder={t('form.PROJECT')}
                                {...register('project', {
                                    $required: true,
                                    resolveError: () =>
                                        t('form.REQUIRED_FIELD'),
                                })}
                            />
                        </div>
                    </Effects>
                    <div className='contact-us-section__content__right-side__footer'>
                        <Effects
                            duration={0.8}
                            triggerOnElementPositionOnScreen={95}
                            initialState={{ opacity: 0, positionY: '200px' }}
                            finalState={{ opacity: 1, positionY: '0px' }}
                        >
                            <div>
                                <Button
                                    text={t('general.CONTACT_US')}
                                    onClick={() => {
                                        //
                                    }}
                                />
                            </div>
                        </Effects>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsSection;
