import { LandingPageDataFragment, StartPageDataFragment } from "@gql/graphql"
import { CmsComponent,OptimizelyComposition,CmsContentArea,isNode } from '@remkoj/optimizely-cms-react/rsc';
import { type OptimizelyNextPage } from "@remkoj/optimizely-cms-nextjs";

export const StartPageComponent: OptimizelyNextPage<StartPageDataFragment> = ({ data, ctx }) => {
    const content = data?.Content;
    return (
        <div>
            <CmsContentArea fieldName="Content" items={content} />
        </div>
    );
};

export default StartPageComponent;
