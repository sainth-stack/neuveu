import './styles.scss'
const ContactUS = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '100%', alignItems: 'center',marginTop:'100px' }}>
            <div style={{ fontSize: '45px', fontWeight: 700, lineHeight: '1.4em', display: 'flex' }}>
                <p>Get In</p>
                <p style={{ color: '#157EFB' }}>Touch</p>
            </div>
            <div>We&apos;ll contact you within 24 hrs of receiving your request</div>
            <div style={{ height: '80px', width: '70%', display: 'flex', fontSize: '20px' }} className="contact-header">
                <div style={{ width: '30%', display: "flex", justifyContent: 'center', alignItems: 'center', borderRight: '1px solid #99999933' }}>
                    <span>contact@neuveu.com</span>
                </div>
                <div style={{ width: '50%', display: "flex", justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
                    <span>4-510, Sali Street, Greamspet Chittoor, A.P, India 517002                    </span>
                </div>
            </div>

            <div className='form-container'>
                <p style={{ color: '#DC3545', fontSize: '12px' }}>The field is required mark as *</p>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <input placeholder='Name*' className='contact-input' />
                    <input placeholder='Email*' className='contact-input' />
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <select className="contact-input contact-select" aria-required="true" aria-invalid="false" name="subject">
                        <option value="Your inquiry about">Your inquiry about</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Managed Services">Managed Services</option>
                        <option value="Project Consultation">Project Consultation</option>
                        <option value="Strategy and Planning">Strategy and Planning</option><option value="Other">Other</option>
                    </select>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <textarea placeholder='Message' className="contact-input contact-textArea" />
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '10px'}}>
                    <input type='checkbox' className='contact-checkbox'/>
                    <span style={{fontSize:'12px',color:'#212529'}}>By submitting, i’m agreed to the Terms & Conditions*</span>
                </div>
                <div>
                    <button className='contact-button'>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default ContactUS;