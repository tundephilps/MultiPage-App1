import React from 'react'




const Secondpage = () => {
  return (
      

    <div id="registration" class="form-1 bg-dark-blue">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="text-container">
                        <h2>Quis Risus Sed Vulpte</h2>
                        <p>Dignissim convallis aenean et tortor at risus viverra adipiscing. Aenean vel elit scelerisque mauris. Ac turpis egestas maecenas pharetra. Tincidunt ornare massa eget egestas purus viverra</p>
                        <ul class="list-unstyled li-space-lg">
                            <li class="media">
                                <i class="fas fa-square"></i><div class="media-body"><strong>Praesent tristique</strong> risus sed vulputate odio ut enim blandit</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i><div class="media-body"><strong>Magna sitrona</strong> ac turpis egestas maecenas pharetra ornare</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i><div class="media-body"><strong>Ametis purus</strong> massa eget egestas purus viverra accumsan in</div>
                            </li>
                        </ul>
                    </div> 
                     </div> 
                <div class="col-lg-6">

                    <form id="registrationForm">
                        <div class="form-group">
                            <input type="text" class="form-control-input" id="rname" required />
                            <label class="label-control" for="rname">Name</label>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control-input" id="roccupation" required />
                            <label class="label-control" for="roccupation">Occupation</label>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control-input" id="remail" required />
                            <label class="label-control" for="remail">Email</label>
                        </div>
                        <div class="form-group checkbox">
                            <input type="checkbox" id="rterms" value="Agreed-to-Terms" required />Cras ornare arcu dui remova 
                            <a href="privacy.html">Privacy Policy</a> and 
                            <a href="terms.html">Terms & Conditions</a>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="form-control-submit-button">SIGN UP</button>
                        </div>
                    </form>
                    
                </div> 
            </div> 
        </div> 
    </div> 
  )
}

export default Secondpage


