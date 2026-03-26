
import { BannerDataFragment } from "@gql/graphql";
import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

export const Banner: CmsComponent<BannerDataFragment> = async ({ data, ctx, contentLink, inEditMode }) => {
    return (
        <CmsEditable
            as="section"
            cmsId={contentLink.key}
        >
            <div data-id="html-block">
                <div class="background-primary bleed text-center p-5">
                    <h2 class="h1 no-dash mb-3 mt-0" data-epi-edit="Title">
                        {/* <CmsEditable cmsId={ contentLink.key } data-epi-edit="Title"ctx={ctx}  cmsFieldName="Title"> */}
                        {data?.Title}
                        {/* </CmsEditable> */}
                    </h2>
                    <p class="mb-3" data-epi-edit="Description">
                        {/* <CmsEditable cmsId={ contentLink.key } data-epi-edit="Description" ctx={ctx}  cmsFieldName="Description"> */}
                        {data?.Description}
                        {/* </CmsEditable> */}
                    </p>
                    <p class="mb-0">
                        <a data-epi-edit="ButtonText" class="btn btn-secondary" data-analytics-tag="home-leave-feedback" href="https://premeralistens.com/">
                            {/* <CmsEditable data-epi-edit="ButtonText" cmsId={ contentLink.key } ctx={ctx}  cmsFieldName="ButtonText"> */}
                            {data?.ButtonText}
                            {/* </CmsEditable> */}
                        </a>
                    </p>
                </div>
            </div>
        </CmsEditable>
    )
}