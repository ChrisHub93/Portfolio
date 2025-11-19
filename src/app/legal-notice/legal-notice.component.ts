import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {
  constructor(public lang: LanguageService) {}

  langTexts = {
    en: {
      headline: `Legal Notice`,
      imprintTitle: `Imprint`,
      boardTitle: `Exploring the Board`,
      termsTitle: `Acceptance of terms`,
      scopeTitle: `Scope and ownership of the product`,
      proprietaryTitle: `Proprietary rights`,
      useTitle: `Use of the product`,
      disclaimerTitle: `Disclaimer of warranties and limitation of liability`,
      indemnityTitle: `Indemnity`,
      termsTexts: `By accessing and using <span>Portfolio</span> (Product), you acknowledge
        and agree to the following terms and conditions, and any policies,
        guidelines, or amendments thereto that may be presented to you from time
        to time. We, the listed students, may update or change the terms and
        conditions from time to time without notice.`,
      scopeText: `<span>Portfolio</span> has been developed as part of a student group
        project in a web development bootcamp at the
        <span>Developer Akademie GmbH.</span> It has an educational purpose and
        is not intended for extensive personal & business usage. As such, we
        cannot guarantee consistent availability, reliability, accuracy, or any
        other aspect of quality regarding this Product. The design of
        <span>Portfolio</span>
        is owned by the <span>Developer Akademie GmbH.</span> Unauthorized use,
        reproduction, modification, distribution, or replication of the design
        is strictly prohibited.`,
      proprietaryText: ` Aside from the design owned by <span>Developer Akademie GmbH.</span>,
        we, the listed students, retain all proprietary rights in
        <span>Portfolio</span>, including any associated copyrighted material,
        trademarks, and other proprietary information.`,
      useText: `<span>Portfolio</span> is intended to be used for lawful purposes only,
        in accordance with all applicable laws and regulations. Any use of for
        illegal activities, or to harass, harm, threaten, or intimidate another
        person, is strictly prohibited. You are solely responsible for your
        interactions with other users of <span>Portfolio</span>.`,
      disclaimerText: `<span>Portfolio</span> is provided "as is" without warranty of any kind,
        whether express or implied, including but not limited to the implied
        warranties of merchantability, fitness for a particular purpose, and
        non-infringement. In no event will we, the listed students, or the
        <span>Developer Akademie</span> , be liable for any direct, indirect,
        incidental, special, consequential or exemplary damages, including but
        not limited to, damages for loss of profits, goodwill, use, data, or
        other intangible losses, even if we have been advised of the possibility
        of such damages, arising out of or in connection with the use or
        performance of <span>Portfolio</span>.`,
      indemnityText: `You agree to indemnify, defend and hold harmless us, the listed
        students, the <span>Developer Akademie</span>, and our affiliates,
        partners, officers, directors, agents, and employees, from and against
        any claim, demand, loss, damage, cost, or liability (including
        reasonable legal fees) arising out of or relating to your use of
        <span>Portfolio</span> and/or your breach of this Legal Notice. 26, 2025`,
      questionText: `For any questions or notices, please contact us at [christianmueller8&#64;gmx.net].`,
      dateText: `Date: November 14, 2025`,
    },
    de: {
      headline: `Rechtliche Hinweise`,
      imprintTitle: `Impressum`,
      boardTitle: `Das Board erkunden`,
      termsTitle: `Akzeptanz der Bedingungen`,
      scopeTitle: `Geltungsbereich und Eigentum am Produkt`,
      proprietaryTitle: `Eigentumsrechte`,
      useTitle: `Nutzung des Produkts`,
      disclaimerTitle: `Haftungsausschluss und Gewährleistung`,
      indemnityTitle: `Freistellung`,
      termsTexts: `Durch den Zugriff auf und die Nutzung von <span>Portfolio</span> (Produkt)
        erkennen Sie die folgenden Geschäftsbedingungen sowie alle Richtlinien,
        Leitfäden oder Änderungen an, die Ihnen von Zeit zu Zeit präsentiert werden
        können. Wir, die aufgeführten Studierenden, können die Geschäftsbedingungen
        jederzeit und ohne vorherige Ankündigung aktualisieren oder ändern.`,
      scopeText: `<span>Portfolio</span> wurde im Rahmen eines Gruppenprojekts im
        Webentwicklung-Bootcamp der <span>Developer Akademie GmbH.</span> entwickelt.
        Es dient ausschließlich Bildungszwecken und ist nicht für umfangreiche
        private oder geschäftliche Nutzung vorgesehen. Daher können wir keine
        gleichbleibende Verfügbarkeit, Zuverlässigkeit, Genauigkeit oder sonstige
        Qualitätsmerkmale dieses Produkts garantieren. Das Design von
        <span>Portfolio</span> ist Eigentum der <span>Developer Akademie GmbH.</span>
        Eine unbefugte Nutzung, Reproduktion, Modifikation, Verbreitung oder
        Vervielfältigung des Designs ist strengstens untersagt.`,
      proprietaryText: `Abgesehen vom Design, das der <span>Developer Akademie GmbH.</span>
        gehört, behalten wir, die aufgeführten Studierenden, alle Eigentumsrechte an
        <span>Portfolio</span>, einschließlich aller zugehörigen urheberrechtlich
        geschützten Materialien, Marken und anderer geschützter Informationen.`,
      useText: `<span>Portfolio</span> darf ausschließlich für rechtmäßige Zwecke und im
        Einklang mit allen geltenden Gesetzen und Vorschriften verwendet werden.
        Jegliche Nutzung für illegale Aktivitäten oder zum Belästigen, Schädigen,
        Bedrohen oder Einschüchtern anderer Personen ist strengstens untersagt. Sie
        sind allein verantwortlich für Ihre Interaktionen mit anderen Nutzern von
        <span>Portfolio</span>.`,
      disclaimerText: `<span>Portfolio</span> wird „wie besehen“ bereitgestellt, ohne jegliche
        ausdrückliche oder stillschweigende Gewährleistung, einschließlich, aber
        nicht beschränkt auf stillschweigende Gewährleistungen der
        Marktgängigkeit, Eignung für einen bestimmten Zweck und Nichtverletzung von
        Rechten. In keinem Fall haften wir, die aufgeführten Studierenden, oder die
        <span>Developer Akademie</span> für direkte, indirekte, zufällige,
        besondere, Folgeschäden oder exemplarische Schäden jeglicher Art,
        einschließlich, aber nicht beschränkt auf Schäden aus entgangenem Gewinn,
        Goodwill, Nutzungsausfall, Datenverlust oder anderen immateriellen
        Verlusten, selbst wenn wir auf die Möglichkeit solcher Schäden hingewiesen
        wurden, die sich aus oder im Zusammenhang mit der Nutzung oder Leistung von
        <span>Portfolio</span> ergeben.`,
      indemnityText: `Sie erklären sich damit einverstanden, uns, die aufgeführten Studierenden,
        die <span>Developer Akademie</span> sowie unsere verbundenen Unternehmen,
        Partner, Führungskräfte, Direktoren, Vertreter und Mitarbeiter von allen
        Ansprüchen, Forderungen, Verlusten, Schäden, Kosten oder Haftungen
        (einschließlich angemessener Anwaltsgebühren), die sich aus Ihrer Nutzung
        von <span>Portfolio</span> und/oder Ihrem Verstoß gegen diesen rechtlichen
        Hinweis ergeben, freizustellen, zu verteidigen und schadlos zu halten.
        26. 2025`,
      questionText: `Für Fragen oder Mitteilungen kontaktieren Sie uns bitte unter [christianmueller8&#64;gmx.net].`,
      dateText: `Datum: 14. November 2025`,
    },
  };
}
