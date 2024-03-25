* Change project version in `package.json`

* Commit the project

```bash
git stage *
git commit -m "v1.0.0"
```

* Create an annotated tag

```bash
git tag -a v1.0.0 -m "v1.0.0"
```

* Push

```bash
git push
```

* Push tag to remote

```bash
git push origin --tags -f
```

* Publish the project

```bash
npm publish --access public
```