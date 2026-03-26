import { CardWrapper } from "@gql/graphql";
import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";

export const CardWrapperComponent: CmsComponent<CardWrapper> = async ({ data }) => {
    console.log("cardsdata", data?.Cards[0]?.Image, data?.Cards[0]?.Link);
    return (
        <div class="row card-row">
            {data?.Cards.map((value, key) => {
                return (
                    <div class="col-12 col-sm pb-sm-0 pb-3">
                        <div class="card">
                            <img alt="" aria-hidden="true" class="card-img-top img-fluid" src="https://www.premera.com/images/pbc/cards/3J_GS42294_900x600.jpg"></img>
                            <div class="card-body">
                                <div>
                                    <h3>{value?.Title}</h3>
                                </div><div class="card-text">
                                    <p>{value?.Description}</p>
                                </div>
                            </div>
                            <div class="card-footer background-white border-0">
                                <div>
                                    <p>
                                        <a href="/visitor/individual-family-plans/health-plans-by-area" target="_self" class="btn btn-tertiary">{value?.Link[0]?.text}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}