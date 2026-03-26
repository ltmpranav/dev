import React from "react";
import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

import type { FooterDataFragment } from "@gql/graphql";
import { FooterDataFragmentDoc } from "@gql/graphql";

function getUrlDefault(urlObj: any): string | undefined {
  return urlObj?.default ?? undefined;
}

function normalizeTarget(target?: string | null): "_self" | "_blank" {
  return target === "_blank" ? "_blank" : "_self";
}

function notNull<T>(v: T | null | undefined): v is T {
  return v != null;
}

function getSocialIconClass(titleOrText?: string | null): string {
  const t = (titleOrText ?? "").toLowerCase();
  if (t.includes("facebook")) return "fab fa-facebook-f";
  if (t.includes("twitter") || t.includes("x")) return "fab fa-twitter rounded-circle";
  if (t.includes("youtube")) return "fab fa-youtube";
  if (t.includes("linkedin")) return "fab fa-linkedin-in";
  return "fas fa-external-link-alt";
}

export const FooterBlockComponent: CmsComponent<FooterDataFragment> = ({
  data,
  contentLink,
}) => {
  const footer: any = data?.footer;

  const socialItems = (footer?.socialMediaLinkItems ?? []).filter(notNull);
  const menuColumns =
    (footer?.footerMenuItems ?? [])
      .filter(notNull)
      .filter((x: any) => !x.__typename || x.__typename === "MDX_Footer_Menu_Navigation_Links")
      .map((col: any) => ({
        menuHeader: col?.HeaderTitle ?? "",
        menulinks: (col?.Links ?? []).filter(notNull),
      }))
      .filter((col: any) => col.menuHeader || col.menulinks.length);
  const languageItems =
    (footer?.LanguageItems ?? [])
      .filter(notNull)
      .flatMap((li: any) => {
        // Only accept the list container type
        if (li?.__typename !== "MDX_Language_Items_List") return [];

        // Pull out child items, remove nulls, keep only the proper type
        return (li?.languageItem ?? [])
          .filter(notNull)
          .filter((x: any) => x?.__typename === "MDX_Language_Item")
      });
  console.log(JSON.stringify(footer?.LanguageItems, null, 2));

  return (
    <CmsEditable as="section" className="py-12 md:py-16">
      <pbc-footer className="d-print-none">
        {/* ===================== DESKTOP ===================== */}
        <footer className="d-none d-md-block main-in">
          <pbc-footer-top>
            <div className="row mb-5">
              {/* LEFT COLUMN */}
              <div className="col-sm-4 pr-3">
                <pbc-footer-logo>
                  <a
                    pbcanalyticstag=""
                    data-analytics-override-route="footer"
                    data-analytics-title="footer logo"
                    href="https://www.premera.com/visitor"
                    data-analytics-tag="footer_footer_logo_pbcwa"
                  >
                    <img
                      id="footer-logo"
                      aria-label="Premera home"
                      alt="footer logo"
                      className="mb-1"
                      src="https://app-ltim01saascv09nt001.cms.optimizely.com/globalassets/shared/premera/member/pbc_logo.svg"
                      aria-hidden="false"
                    />
                  </a>

                  <ul>
                    <li>
                      <a
                        pbcanalyticstag=""
                        data-analytics-override-route="footer"
                        data-analytics-title="footer lob"
                        tabIndex={0}
                        href=""
                        data-analytics-tag="footer_footer_lob_pbcwa"
                      >
                        <span id="footer-lob">
                          {footer?.goToAKWAsitebutton ?? "Go to the Alaska website"}
                        </span>
                      </a>
                    </li>
                  </ul>
                </pbc-footer-logo>

                {/* SOCIAL MEDIA (BOUND FROM GRAPHQL) */}
                <pbc-footer-social-media>
                  {socialItems.map((item: any, idx: number) => {
                    const href = getUrlDefault(item?.url);
                    if (!href) return null;

                    const target = normalizeTarget(item?.target);
                    const rel = target === "_blank" ? "noopener noreferrer" : undefined;

                    const label = item?.title || item?.text || "Social link";
                    const iconClass = getSocialIconClass(item?.title || item?.text);

                    return (
                      <a
                        key={`${href}-${idx}`}
                        target={target}
                        rel={rel}
                        pbcanalyticstag=""
                        data-analytics-override-route="footer"
                        data-analytics-title={item?.title ?? label}
                        href={href}
                        data-analytics-tag={`footer_${(item?.title ?? "social").toLowerCase()}_pbcwa`}
                      >
                        <i aria-hidden="true" className={iconClass} />
                        <span className="sr-only">{label}</span>
                      </a>
                    );
                  })}
                </pbc-footer-social-media>

                {/* MOBILE APPS (STATIC) */}
                <pbc-footer-mobile-apps>
                  <div data-id="mobileAppsSection" className="row mt-4 no-gutters">
                    <div className="col col-sm-4 social">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        pbcanalyticstag=""
                        data-analytics-override-route="footer"
                        data-analytics-title="apple store"
                        href="https://apps.apple.com/app/id1139271535"
                        data-analytics-tag="footer_apple_store_pbcwa"
                      >
                        <img
                          aria-hidden="false"
                          src="assets/image/apple-store-badge.svg"
                          className="img-fluid mr-sm-2"
                          alt="Download from the Apple Store"
                        />
                      </a>
                    </div>

                    <div className="col col-sm-4 social">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        pbcanalyticstag=""
                        data-analytics-override-route="footer"
                        data-analytics-title="google play"
                        href="https://play.google.com/store/apps/details?id=com.premera.android&referrer=utm_campaign%3Dadb_acq_v3%26utm_source%3Dadb_acq_v3%26utm_content%3D87f684aca555370714fc7a6a886f3b9844208012"
                        data-analytics-tag="footer_google_play_pbcwa"
                      >
                        <img
                          aria-hidden="false"
                          src="assets/image/google-play-badge.svg"
                          className="img-fluid ml-sm-2"
                          alt="Download from Google Play Store"
                        />
                      </a>
                    </div>
                  </div>
                </pbc-footer-mobile-apps>

                <br />

                <img
                  id="NCQA"
                  src="https://app-ltim01saascv09nt001.cms.optimizely.com/globalassets/shared/premera/member/ncqa-accredited-transparent.png"
                  alt="NCQA Badge"
                  style={{ width: "8em", paddingTop: "1em" }}
                />

                <p id="ncaqDisclaimer" className="copyright pt-2">
                  {footer?.nCQADisclaimer ?? "Premera Blue Cross is NCQA accredited"}
                </p>
              </div>

              <div className="col-sm-8">
                <pbc-footer-nav-cols>
                  <div data-id="footerNavLinks" className="row">
                    {menuColumns.map((item: any, idx: number) => (
                      <div key={`${item.menuHeader}-${idx}`}>
                        <div pbcapplyrules="">
                          <div className="col-md col-6">
                            <div className="footer-heading">{item.menuHeader}</div>

                            <ul aria-label={item.menuHeader}>
                              {(item.menulinks ?? [])
                                .filter(notNull)
                                .map((l: any, j: number) => {
                                  const href = l?.url?.default;
                                  if (!href) return null;

                                  const text = l?.text || l?.title || href;

                                  return (
                                    <li key={`${href}-${j}`}>
                                      <a
                                        pbcanalyticstag=""
                                        data-analytics-override-route="footer"
                                        lang="en"
                                        href={href}
                                      >
                                        {text}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </pbc-footer-nav-cols>
              </div>
            </div>
          </pbc-footer-top>

          {/* ===================== BOTTOM ===================== */}
          <pbc-footer-bottom>
            <div className="mt-3 mt-sm-0" />

            <h2 className="footer-heading">
              {footer?.languageSupport ?? "Language support"}
            </h2>

            <p id="language-support">
              {languageItems.map((li: any, idx: number) => {
                const href = li?.pdfLink?.url?.default;
                const label =
                  li?.nativeName || li?.name || li?.languageCode || "Language";

                // If link missing, show plain text (or disabled link)
                if (!href) {
                  return (
                    <span
                      key={`lang-${idx}`}
                      className="footer__languageLink footer__languageLink--disabled"
                      lang={li?.languageCode ?? undefined}
                      title="PDF not available"
                    >
                      {label}
                    </span>
                  );
                }

                return (
                  <a
                    key={`${href}-${idx}`}
                    pbcanalyticstag=""
                    data-analytics-override-route="footer"
                    target="_blank"
                    rel="noopener noreferrer"
                    lang={li?.languageCode ?? undefined}
                    href={href}
                    title={label}
                  >
                    {label}
                  </a>
                );
              })}
            </p>
            {footer?.legal?.html ? (
              <div
                id="legal"
                className="legal"
                dangerouslySetInnerHTML={{ __html: footer.legal.html }}
              />
            ) : null}

            {footer?.copyright ? (
              <p id="copyright" className="copyright">
                {footer.copyright}
              </p>
            ) : null}

            <div className="pt-4 small" hidden>
              <div id="uiBuild">UI</div>
              <div id="uiVersion">Version: PLZ-Visitor-CI-MASTER-STAGING-PROD_2026.2.19.1</div>
              <div id="uiEnv">Environment: prod</div>
              <div id="uiSessionId" className="mb-2">
                Session ID: XaYKO
              </div>
              <div id="bffBuild">BFF</div>
              <div id="bffVersion">Version: 1.0.0.0</div>
              <div id="bffEnvironment">Environment: prod</div>
              <div id="bffPspUrl">PSP URL: https://apim.ag.prod.premera.net/</div>
              <div id="bffContentTable">Content Table: memberTable2</div>
              <div id="bffContentUpdate">Content Last Updated: 2/27/2026 1:52 AM</div>
            </div>
          </pbc-footer-bottom>
        </footer>
      </pbc-footer>
    </CmsEditable>
  );
};

FooterBlockComponent.getDataFragment = () => ["FooterData", FooterDataFragmentDoc];
FooterBlockComponent.displayName = "MDX Footer";

export default FooterBlockComponent;