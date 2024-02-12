import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="p-4 lg:p-2">
      <h1 className="max-w-3xl px-4 mb-8 text-3xl leading-loose  text-black-two sm:px-0  mv_waheed">ލިސްޓު ބާތިލެއް ނުކުރަން، އޭޖީގެ ލަފާއާ އެކު ދާނީ ކުރިއަށް: ހައުސިން މިނިސްޓްރީ</h1>
      <br />
      <p className="max-w-3xl px-4 mb-8 text-lg leading-loose  text-black-two sm:px-0 mv_faseyha">
        ގެދޮރުވެރިޔާ ސްކީމުގެ ދަށުން ފްލެޓްތައް ދޫކުރި މީހުންގެ ލިސްޓު ބާތިލުކުރަން މި ސަރުކާރުން ނޫޅޭ ކަމަށާއި އެއްވެސް މައްސަލައެއް ނެތް{" "}
      </p>
    </div>
  )
}
