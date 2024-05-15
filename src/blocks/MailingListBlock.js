import React from "react";

const MailingListBlock = ()=>{

    const content = `<div id="wufoo-km284b4030beeq" style="height: 150px; overflow: hidden;"> Fill out my <a href="https://hbku.wufoo.com/forms/km284b4030beeq">online form</a>. </div> <script type="text/javascript"> var km284b4030beeq; (function(d, t) { var s = d.createElement(t), options = { 'userName':'hbku', 'formHash':'km284b4030beeq', 'autoResize':true, 'height':'142', 'async':true, 'host':'wufoo.com', 'header':'hide', 'ssl':true }; s.src = ('https:' == d.location.protocol ?'https://':'http://') + 'secure.wufoo.com/scripts/embed/form.js'; s.onload = s.onreadystatechange = function() { var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return; try { km284b4030beeq = new WufooForm(); km284b4030beeq.initialize(options); km284b4030beeq.display(); } catch (e) { } }; var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr); })(document, 'script'); </script>

								<!-- <form class="webform-client-form webform-client-form-12923 field-btn-group-block"
                                           action="/en/content/community-classes-2019" method="post"
                                           id="webform-client-form-12923" accept-charset="UTF-8">
        <div>
            <div class="form__row field-btn-group">
                <div
                    class="form-item webform-component webform-component-email webform-component--enter-you-email">
                    <label class="element-invisible"
                           for="edit-submitted-enter-you-email">Subscribe
                        <span class="form-required"
                              title="This field is required.">*</span></label>
                    <input required="required" class="email form-text form-email required"
                           placeholder="Email Address" type="email"
                           id="edit-submitted-enter-you-email"
                           name="submitted[enter_you_email]" size="60">
                </div>
                <div class="form-actions"><input class="l-btn l-btn--tertiary form-submit"
                                                 type="submit" name="op" value="Subscribe"></div>
            </div>
            <input type="hidden" name="details[sid]">
                <input type="hidden" name="details[page_num]" value="1">
                    <input type="hidden" name="details[page_count]" value="1">
                        <input type="hidden" name="details[finished]" value="0">
                            <input type="hidden" name="form_build_id"
                                   value="form-SdYbgMw2tNZL_i0bFkuDggKHT512Ic49j6vAy1HzsDs">
                                <input type="hidden" name="form_token"
                                       value="XGhJZRmkWOg0om3ZEV6oVCX9U3BU8_1rIpmuAxMzg9c">
                                    <input type="hidden" name="form_id" value="webform_client_form_12923">
        </div>
    </form> -->`

    return (<section className="email-sub border-bottom m-wrap bg-darkblue text-white">
        <div className="container">
            <div className="row row-eq-height">
                <div className="col-md-24 ">
                    <div className="email-sub__container ">
                        <div className="email-sub__header ">
                            <div className="email--title">
                                <h3 className="text-white ">Join Our Mailing List</h3>
                                <p className="p-b-0 m-b-0">Stay up to date with our latest news and events</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-24 v-center-row">
                    <div className="email-sub__container v-center ">
                        <div className="email-sub__form m-t-0">
                            <form className="webform-client-form webform-client-form-12923 field-btn-group-block"
                                  action="/en/content/community-classes-2019" method="post"
                                  id="webform-client-form-12923" accept-charset="UTF-8">
                                <div>
                                    <div className="form__row field-btn-group">
                                        <div
                                            className="form-item webform-component webform-component-email webform-component--enter-you-email">
                                            <label className="element-invisible"
                                                   htmlFor="edit-submitted-enter-you-email">Subscribe
                                                <span className="form-required"
                                                      title="This field is required.">*</span></label>
                                            <input required="required" className="email form-text form-email required"
                                                   placeholder="Email Address" type="email"
                                                   id="edit-submitted-enter-you-email"
                                                   name="submitted[enter_you_email]" size="60" />
                                        </div>
                                        <div className="form-actions"><input
                                            className="l-btn l-btn--tertiary form-submit"
                                            type="submit" name="op" value="Subscribe" /></div>
                                    </div>
                                    <input type="hidden" name="details[sid]" />
                                        <input type="hidden" name="details[page_num]" value="1"/>
                                            <input type="hidden" name="details[page_count]" value="1"/>
                                                <input type="hidden" name="details[finished]" value="0"/>
                                                    <input type="hidden" name="form_build_id"
                                                           value="form-SdYbgMw2tNZL_i0bFkuDggKHT512Ic49j6vAy1HzsDs" />
                                                        <input type="hidden" name="form_token"
                                                               value="XGhJZRmkWOg0om3ZEV6oVCX9U3BU8_1rIpmuAxMzg9c" />
                                                            <input type="hidden" name="form_id"
                                                                   value="webform_client_form_12923" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default MailingListBlock;
