import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeTitle, changeTitleSEO, generalSelector} from "../store/reducers/generalReducer";
import {useSSE} from "use-sse";

const ApplyForFundingPage = ()=>{
    const generalSettings = useSelector(generalSelector);
    const {title} = generalSettings;
    const dispatch = useDispatch()

    useSSE(()=>{
        dispatch(changeTitle('Innovation Center'))
        dispatch(changeTitleSEO('Innovation Center | Apply for Funding'))

        return Promise.resolve('Innovation Center | Apply for Funding')
    },[])


    useEffect(() => {
        document.title = 'Innovation Center | Apply for Funding'

    }, []);


    return (
        <section className="m-wrap ">
            <div className="container">
                <div className="row">
                    <div className="col-md-24">
                        <div className="btn__list">
                        <ul class="btn__list_group" style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                                <li class="btn__list_group--item"> <a target="_blank" href="https://hbku.wufoo.com/forms/k1kuq2l01snrffg/" target="_blank"> Apply For Kickstart Fund Now </a> </li>
                                <li class="btn__list_group--item"> <a href="https://portal.qf.org.qa/Documents/HBKU%20IC/Proposal%20Template%20HBKU%20Innovation%20Center.docx" target="_blank" >
                                Proposal Template	</a> </li>
                                <li class="btn__list_group--item"> <a target="_blank" href="https://portal.qf.org.qa/_layouts/15/WopiFrame.aspx?sourcedoc=/Documents/HBKU%20IC/Letter%20of%20Commitment%20HBKU%20Innovation%20Center.docx&action=default" target="_blank" > Letter of Commitment</a> </li>
                                <li class="btn__list_group--item"> <a target="_blank" href="https://portal.qf.org.qa/_layouts/15/WopiFrame.aspx?sourcedoc=/Documents/HBKU%20IC/Innovation%20Funds%20Timeline%20HBKU%20Innovation%20Center.docx&action=default" target="_blank" >Innovation Center Timeline</a> </li>
                                <li class="btn__list_group--item"> <a target="_blank" href="https://portal.qf.org.qa/Documents/HBKU%20IC/Technology%20Readiness%20Level%20HBKU%20Innovation%20Center.pdf" target="_blank" >Technology Readiness Level Information Card</a> </li>
                            <li className="btn__list_group--item"><a target="_blank"
                                href="https://portal.qf.org.qa/_layouts/15/WopiFrame.aspx?sourcedoc=/Documents/HBKU%20IC/Progress%20Report%20Template_HBKU%20Innovation%20Center.docx&action=default"
                                target="_blank">Progress Report Template</a></li>
                            <li className="btn__list_group--item"><a target="_blank"
                                href="https://portal.qf.org.qa/Documents/HBKU%20IC/Final%20Report%20Template_HBKU%20Innovation%20Center.docx"
                                target="_blank">Final Report Template</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-24">
                        <h3 className="title-md-m m-b-2 text-darkblue m-b-3 text-center">Please refer to the Innovation Center Timeline document for application dates</h3>
                        <div className="btn__list" style={{
                            display:'flex',
                            justifyContent:'center'

                        }}>
                            <ul className="btn__list_group" style={{width:'100%', display:'flex',justifyContent:'center'}}>
                                <li  className="btn__list_group--item"><a href="mailto:innovation@hbku.edu.qa"
                                                                         target="_blank">Inquire Now</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default ApplyForFundingPage;
