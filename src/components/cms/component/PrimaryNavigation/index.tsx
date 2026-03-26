import { MDX_Primary_Navigation } from "@gql/graphql";
import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";

export const PrimaryNavigation: CmsComponent<MDX_Primary_Navigation> = async ({ data }) => {

    const getfirstlevelitems = (level1) => {
        level1.map((a, b) => { console.log("level1", a?.menuHeading) });
        level1.map((value, key) => {
            return (
                <>
                    <li class="nav-item dropdown">
                        <a aria-haspopup="true" role="button" tabindex="0" pbcanalyticstag="" data-analytics-override-route="header" pbcapplyrules="" class="nav-link dropdown-toggle" id="" aria-expanded="false" aria-label="Choose a Plan" data-analytics-tag="header_choose_a_plan_pbcwa">
                            {value?.menuHeading}
                        </a>
                    </li>
                </>
            )
        })



    }
    return (
        <pbc-header>
            <header trackscroll="" class="main-loading main-in">
                <nav aria-labelledby="nav2" class="navbar navbar-expand-md">
                    <div class="nav-primary-container d-print-none">
                        <div class="navbar-collapse">
                            <pbc-primary-nav>
                                <div>
                                    <ul id="primary-nav" aria-label="Primary Navigation" class="navbar-nav nav-primary">
                                        {data?.PrimaryNavigation?.map((value, key) => {
                                            return (
                                                <li class="nav-item dropdown">
                                                    <a aria-haspopup="true" role="button" tabindex="0" pbcanalyticstag="" data-analytics-override-route="header"
                                                        pbcapplyrules="" class="nav-link dropdown-toggle" id="" aria-expanded="false"
                                                        aria-label={value?.menuHeading} data-analytics-tag={value?.menuHeading}
                                                    >
                                                        {value?.menuHeading}
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </pbc-primary-nav>
                        </div>
                    </div>
                </nav>
            </header>
        </pbc-header>
    )
}