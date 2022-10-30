function Map(props) {
    return (
        <div>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15275.56261783114!2d96.16330505!3d16.8317798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssg!4v1667037063359!5m2!1sen!2ssg"
                    width="100%" height="450" style={{border:"0"}} allowFullScreen="true" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}

export default Map;