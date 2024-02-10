const Info = () => {
  return (
    <div className="content">
      <div className="profile col-md-12">
        <div className="card">
          <div className="card-body box-profile">
            <div className="img text-center">
              <img
                className="foto"
                src="https://indian-goku.github.io/social-links-profile-main/assets/images/avatar-jessica.jpeg"
                alt="User profile picture"
              />
            </div>
            <div className="judul p-3">
              <h4 className="profile-username text-center">Jessica Randall</h4>
              <p className="alamat text-center">London, United Kingdom</p>
            </div>
            <div className="judul2">
              <p className="subJudul">"Front-end developer and avid reader."</p>
            </div>
            <div className="aplikasi">
              <a
                href="https://github.com/Raehan123"
                target="_blank"
                className="github"
              >
                <button type="button" className="btn btn-secondary btn-sm">
                  Github <i className="fa-brands fa-github"></i>
                </button>
              </a>
              <br />
              <a
                href="https://www.frontendmentor.io/"
                target="_blank"
                className="frontend"
              >
                <button type="button" className="btn btn-secondary btn-sm mt-3">
                  Frontend Mentor
                  <i className="fa-regular fa-face-grin-squint"></i>
                </button>
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/raehan-nur-9476472a4/"
                target="_blank"
                className="linkedin"
              >
                <button type="button" className="btn btn-secondary btn-sm mt-3">
                  Linkedin <i className="fa-brands fa-linkedin"></i>
                </button>
              </a>
              <br />
              <a
                href="https://www.facebook.com/rayhan.dewalostsaga"
                target="_blank"
                className="facebook"
              >
                <button type="button" className="btn btn-secondary btn-sm mt-3">
                  Facebook
                  <i className="fa-brands fa-facebook facebook"></i>
                </button>
              </a>
              <br />
              <a
                href="https://www.instagram.com/rryyhhnnn_/"
                target="_blank"
                className="instagram"
              >
                <button type="button" className="btn btn-secondary btn-sm mt-3">
                  Instagram <i className="fa-brands fa-instagram"></i>
                </button>
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Info };
