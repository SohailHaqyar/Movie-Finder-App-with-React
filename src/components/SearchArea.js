import React from "react";

const SearchArea = ({handleSubmit , handleChange}) => {
  return (
    <div className="container">
      <div className="row">
        <section className="col s4 offset-s4">
          <form action="" onSubmit={handleSubmit}>
            <div className="input-field">
              <input type="text" placeholder="Search movie" onChange={handleChange}/>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SearchArea;
