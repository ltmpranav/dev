import {
  CmsContentArea,
  CmsEditable,
  type CmsComponent,
} from "@remkoj/optimizely-cms-react/rsc";

import { GenericDataFragment, GenericDataFragmentDoc } from "@gql/graphql";

export const GenericBlockComponent: CmsComponent<GenericDataFragment> = async({
  data,
  ctx,
  contentLink,
   inEditMode,
}) => {
  
  console.log("data",data);
  const title = data?.Title ?? "";
  //const description = data?.Description ?? "";
  const button = data?.Button;
  const image = data?.Image;
  

  return (
    <CmsEditable
      as="section"
      cmsId={contentLink.key}
      className="py-12 md:py-16"
    >
  
      {/* Hardcoded HTML (converted to valid JSX) */}
      <div data-id="html-block">
        <div className="row align-items-center bleed">
          <div className="col-sm-12 col-md-6 pl-5">
              <h2 className="h1" ><CmsEditable cmsId={ contentLink.key } ctx={ctx}  cmsFieldName="Title">{title || "Maximize Your Benefits. Create a Digital Account."}</CmsEditable></h2>

 
           <CmsEditable>
            <p className="py-3">
              <a
                href={button?.url?.default ?? "#"}
                className="btn btn-primary"
                id="pbcak-home-heroCreateAccount"
              >
               {button?.text || "Create a Digital Account"}
              </a>
            </p>
            </CmsEditable>
  
          </div>

          <div className="col-sm-12 col-md-6 pr-0">
            <CmsEditable>
            <img
              alt="Use your health plan on the go by creating a digital account"
              src={image?.url?.default ?? "https://www.premera.com/images/pbc/two-pack/hero_illustration.png"}
              className="img-fluid"
            />
            </CmsEditable>
          </div>
        </div>
      </div>
    </CmsEditable>
  );
};

GenericBlockComponent.getDataFragment = () => [
  "GenericData",
  GenericDataFragmentDoc,
];

GenericBlockComponent.displayName = "Generic Block";

export default GenericBlockComponent;
