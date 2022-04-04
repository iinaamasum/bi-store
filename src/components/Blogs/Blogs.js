import React from 'react';

const Blogs = () => {
  return (
    <div style={{ height: '80vh' }} className="container mx-auto px-4 sm:px-0">
      <h1 className="text-5xl font-mono font-bold text-center mt-8">
        Important Information
      </h1>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 mt-10 gap-5 sm:gap-10 ">
        <div className="py-10 bg-white rounded-lg border border-gray-200 shadow-md px-5 text-justify">
          <h2 className="text-center text-blue-500 font-bold font-mono text-3xl py-3">
            What is the purpose of context api???
          </h2>
          <p>
            The main purpose of context api is to exchange variable details and
            data by using prop drilling method in the whole application. We all
            know that react uses unidirectional data flow which is done by the
            props. If we want to send data from any component to others. In this
            method we always have send data like tree from root level to desired
            component. If we want to directly access the data directly from leaf
            node to root component we have to use context api. In this method we
            have to set a provider and a consumer.
          </p>
        </div>

        <div className="py-10 bg-white rounded-lg border border-gray-200 shadow-md px-5 text-justify">
          <h2 className="text-center text-blue-500 font-bold font-mono text-3xl py-3">
            What is semantic tag???
          </h2>
          <p>
            Semantic tags in html are those special type of tags which gives the
            browser extra Information that what type of content are there. It
            also convenient to the developer to recognize that what kind of code
            should be there. Using many semantic tags gives the developer more
            hook to style the content as per client requirement. It also helps
            the browser to catagories the content according users requirement.
            So, developer should use more and effective way to enrich the
            content with as much as semantic tag he/she can.
          </p>
        </div>
      </div>

      <div className="my-10 bg-white rounded-lg border border-gray-200 shadow-md px-5 text-justify">
        <h2 className="text-center text-blue-500 font-bold font-mono text-3xl py-3">
          What is the difference between inline, inline-block and block
          elements?
        </h2>
        <div className="w-full my-5">
          <table class="table-fixed w-full text-center py-10">
            <thead className="text-2xl">
              <tr>
                <th>Inline</th>
                <th>Block</th>
                <th>Inline-block</th>
              </tr>
            </thead>
            <tbody className="text-xl">
              <tr>
                <td>Alow to sit other elements to their left and right.</td>
                <td>Force to make a line break.</td>
                <td>Alow to sit other elements to their left and right.</td>
              </tr>
              <tr>
                <td>Not predefined width and height set.</td>
                <td>acquire full width if not set.</td>
                <td>Respective height and width.</td>
              </tr>
              <tr>
                <td>No right and left margin</td>
                <td>Have right and left margin</td>
                <td>Have right and left margin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
